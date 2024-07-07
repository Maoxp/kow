# springBoot 对外提供图像文件

如果当前接口需要直接返回一个 Image 类型的图像文件，应该如何完成？

以下我们使用了三种不同的方法，展示了如何从 Spring Boot 应用向客户端发送图像数据。

```plain
pom.xml
src
├── main
│   ├── java
│   │   └── com
│   │       └── sdioo
│   │           ├── Application.java
│   │           └── controller
│   │               └── MyController.java
│   └── resources
│       └── image
│           └── sid.jpg
└── test
    └── java
```

## HttpServletResponse

使用 `HttpServletResponse` 提供图像，例子如下：

```java
import java.io.IOException;
import javax.servlet.http.HttpServletResponse;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

/**
 * 获取图像资源并将其直接写入响应对象
 */
    @RequestMapping(value = "/sid", method = RequestMethod.GET, produces = MediaType.IMAGE_JPEG_VALUE)
    public void getImage(HttpServletResponse response) throws IOException {
        var imgFile = new ClassPathResource("image/sid.jpg");   //获取图像资源

        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(imgFile.getInputStream(), response.getOutputStream());
    }
}
```

## ResponseEntity

### 用 ResponseEntity 提供图像

例子如下：

```java
import java.io.IOException;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

/**
 * 获取图像资源并将其直接写入响应对象
 */
    @RequestMapping(value = "/sid", method = RequestMethod.GET, produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<byte[]> getImage(HttpServletResponse response) throws IOException {
        var imgFile = new ClassPathResource("image/sid.jpg");   //获取图像资源

        byte[] bytes = StreamUtils.copyToByteArray(imgFile.getInputStream());
        
        return ResponseEntity.ok()
            .contentType(MediaType.IMAGE_JPEG)
            .body(bytes);
    }
}
```

### 使用 ResponseEntity 和 InputStreamResource 提供图像

`InputStreamResource` (是 **Spring** 对低级资源的抽象) 例子如下:

```java
import java.io.IOException;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

    @RequestMapping(value = "/sid", method = RequestMethod.GET, produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<InputStreamResource> getImage() throws IOException {
        var imgFile = new ClassPathResource("image/sid.jpg");

        return ResponseEntity
                .ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(new InputStreamResource(imgFile.getInputStream()));
    }
}
```
