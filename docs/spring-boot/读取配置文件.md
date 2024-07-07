# 使用 @ConfigurationProperties 读取 Resource 中的配置

从 `application.properties` 文件读取配置数据，该文件是默认的 Spring Boot 配置文件。

```plain
pom.xml
src
├───main
│   ├───java
│   │   └───com
│   │       └───sdioo
│   │           │   Application.java
│   │           └───conf
│   │                   AppProperties.java
│   └───resources
│           application.properties
│           mail.properties
└───test
    └───java
```

`application.properties` 内容如下:

```properties
spring.main.banner-mode=off

app.colour=steelblue
app.lang=en
app.theme=dark
```

定义一个配置类文件， 如 `AppProperties.java` 用来读取所需配置，并绑定到此配置对象。

```java
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "app") // 前缀 app 表示：读取 app.~ 后的属性，否则，读取整个文档下匹配的属性。
public class AppProperties {

    private String colour;
    private String lang;
    private String theme;
    public String getColour() {
        return colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public String getLang() {
        return lang;
    }

    public void setLang(String lang) {
        this.lang = lang;
    }

    public String getTheme() {
        return theme;
    }

    public void setTheme(String theme) {
        this.theme = theme;
    }
}
```

此外，还可以从其他路径读取配置。使用 `@PropertySource` 来设置自定义属性文件的路径。

`mail.properties` 内容如下：

```plain
hostname=info@example.com
port=9000
from=admin@example.com

recipients[0]=user1@example.com
recipients[1]=user2@example.com
recipients[2]=user3@example.com
recipients[3]=user4@example.com
```

定义一个配置类文件 `MailProperties.java`

```java
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;

@ConfigurationProperties
@PropertySource("classpath:mail.properties")
public class MailProperties {

    private String hostname;
    private int port;
    private String from;
    private List<String> recipients;

    public String getHostname() {
        return hostname;
    }

    public void setHostname(String hostname) {
        this.hostname = hostname;
    }

    public int getPort() {
        return port;
    }

    public void setPort(int port) {
        this.port = port;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public List<String> getRecipients() {
        return recipients;
    }

    public void setRecipients(List<String> recipients) {
        this.recipients = recipients;
    }
}
```
