---
title: Package Scala application as an executable file
sidebar_position: 2
---

Scala CLI allows you to package your application into a lightweight JAR file, that can be easily run.
It only contains the byte code of your sources, and automatically downloads its dependencies on its first run.

The following snippet contains a short application to detect the OS:
```scala title=DetectOsApp.scala
object DetectOSApp extends App  {
    def getOperatingSystem(): String = {
        val os: String = System.getProperty("os.name")
        os
    }
    println(s"os: ${getOperatingSystem()}")
}
```

### Default format (lightweight launcher)

By default, the `package` sub-command generates a lightweight JAR.

```bash
scala-cli package DetectOsApp.scala
```

<!-- Expected:
Wrote DetectOsApp, run it with
  ./DetectOsApp
-->

Lightweight JARs require the `java` command to be available, and access to internet if dependencies need to be downloaded.

```bash
# Run DetectOsApp on MacOs
./DetectOsApp
# os: Mac OS X
```

In the previous example, a Lightweight JAR that was built in a MacOs environment could also run on Linux.

```bash
# Run DetectOsApp on Linux
./DetectOsApp
# os: Linux
```

Scala-cli supports building Lightweight JARs in the MacOS, Linux, and Windows environments.
JARs built on macOS and Linux are portable between these two OSs. The Lightweight JARs built on Windows can only be run on Windows.


### Assemblies
Passing `--assembly` to the `package` sub-command generates so-called "assemblies" or "fat JARs".

```bash
scala-cli package --assembly DetectOsApp.scala
```

Assemblies also require the `java` command to be available in the `PATH`. As all dependencies are packaged into the assembly, nothing gets downloaded upon the first run and no internet access is required.

```bash
# Run DetectOsApp on MacOs
./DetectOsApp
# os: Mac OS X
```
