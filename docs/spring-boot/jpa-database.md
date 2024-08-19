# 如何使用 JPA 完成 Data 操作

引入 **Spring Data JPA**，它是Spring Data 项目的一部分，使实现基于 `JPA` 的数据操作变得更加容易。

**Spring Data JPA**使用 JPA 将数据存储在关系数据库中。它可以在运行时从存储库界面自动创建存储库实现。

```plain
├── pom.xml
└── src
    ├── main
    │   ├── java
    │   │   └── com
    │   │       └── sdioo
    │   │           ├── Application.java
    │   │           ├── bean
    │   │           │   └── City.java
    │   │           ├── controller
    │   │           │   └── MyController.java
    │   │           ├── repository
    │   │           │   └── CityRepository.java
    │   │           └── service
    │   │               ├── CityService.java
    │   │               └── ICityService.java
    │   └── resources
    │       ├── application.yml
    │       └── import.sql
    └── test
        └── java   
```

## pom.xml 中引入依赖

```pom
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
</dependency>

<build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
```

在 `spring-boot-maven-plugin` 提供了 Maven 的Spring启动支持，使我们能够打包可执行的 `JAR` 或 `WAR` package，它的 `spring-boot:run` target run Spring 启动应用。

## application.yml

```yml
server:
    port: 8086
    context-path: /rest

spring: 
    main:
        banner-mode: "off"     
    jpa:
        database: h2
        hibernate:
            dialect: org.hibernate.dialect.H2Dialect
            ddl-auto: create-drop   # 数据定义语言模式, create-drop选项将自动创建和删除数据库模式

logging: 
    level: 
        org: 
            springframework: ERROR
```

## 实体 City.java

每个实体必须至少定义两个注解：`@Entity`和 `@Id`。 此前，我们已经设置了ddl-auto选项，create-drop这意味着 Hibernate 会创建这个实体表模式。

```java
package com.sdioo.bean;

import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cities")
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private int population;

    public City() {
    }

    public City(String name, int population) {
        this.name = name;
        this.population = population;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPopulation() {
        return population;
    }

    public void setPopulation(int population) {
        this.population = population;
    }
}
```

## repository CityRepository.java

通过从 `Spring CrudRepository`扩展，我们将为我们的数据存储 库实现一些方法，包括`findAll()`和`findOne()`, 这样，我们节省了大量样板代码。

```java
package com.sdioo.repository;

import com.sdioo.bean.City;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepository extends CrudRepository<City, Long> {
}
```

## Service ICityService.java

```java
package com.sdioo.service;

import com.sdioo.bean.City;
import com.sdioo.repository.CityRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CityService implements ICityService {

    @Autowired
    private CityRepository repository;

    @Override
    public List<City> findAll() {

        List<City> cities = (List<City>) repository.findAll();

        return cities;
    }

    @Override
    public City findById(Long id) {

        City city = repository.findOne(id);
        return city;
    }
}
```

## MyController

```java
package com.sidoo.controller;

import com.sdioo.bean.City;
import com.sdioo.service.ICityService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

    @Autowired
    ICityService cityService;

    @RequestMapping("/cities")
    public List<City> findCities() {

        List<City> cities = (List<City>) cityService.findAll();
        return cities;
    }

    @RequestMapping("/cities/{userId}")
    public City findCity(@PathVariable Long userId) {

        City city = cityService.findById(userId);
        return city;
    }
}
```
