FROM maven:3.3.9-jdk-8-alpine as build
WORKDIR /usr/src/app
COPY pom.xml .
RUN mvn -B -f pom.xml -s /usr/share/maven/ref/settings-docker.xml dependency:resolve
COPY . .
RUN mvn -B -s /usr/share/maven/ref/settings-docker.xml install spring-boot:repackage

FROM java:8-jdk-alpine as install
WORKDIR /app
COPY --from=build /usr/src/app/target/motorcycle-api-1.0.jar .
ENTRYPOINT ["java", "-jar", "/app/motorcycle-api-1.0.jar"]