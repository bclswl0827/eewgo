## Tutorial on Building OregonDSP

You can compile OregonDSP to JavaScript from source code on Linux, macOS, or Windows. The following steps are based on Debian Linux (Debian GNU/Linux 11 (bullseye)), but should work on other OS as well.

### Prerequisites

- Git
- Oracle JRE or OpenJDK (needs JDK 17 or later)

### Get OregonDSP source code

```bash
$ git clone https://github.com/crotwell/OregonDSP-kotlin --depth 1
```

Enter the `OregonDSP-kotlin` directory:

```bash
$ cd OregonDSP-kotlin
```

### Customize build configuration (Optional)

To set proxy for `gradlew` to download dependencies, create `gradle.properties` and add the following:

```properties
systemProp.http.proxyHost=127.0.0.1
systemProp.http.proxyPort=8080
systemProp.https.proxyHost=127.0.0.1
systemProp.https.proxyPort=8080
```

During the build process, `gradlew` will install Node.js and Npm to install JavaScript dependencies, it's also necessary to apply the proxy settings for `npm` commands. For Linux and macOS, the `.npmrc` file should be created at `$HOME/.npmrc`, if you are using Windows, the file should be created at `%USERPROFILE%/.npmrc`.

```bash
$ touch $HOME/.npmrc
$ cat << EOF > $HOME/.npmrc
proxy=http://127.0.0.1:8080
https-proxy=http://127.0.0.1:8080
EOF
```

Where `127.0.0.1` and `8080` are the IP address and port of your HTTP proxy server.

### Compile OregonDSP

To compile OregonDSP to JavaScript, use the following command:

```bash
$ ./gradlew browserDevelopmentWebpack
```

**If you are using Windows, you need to run `gradlew.bat` instead of `gradlew`.**

After OregonDSP is compiled, the `build/js/packages/oregondsp/kotlin/` directory will contain the JavaScript library.

### After Compiling

Go to the `build/js/packages/oregondsp/kotlin/` directory.

```bash
$ cd build/js/packages/oregondsp/kotlin
```

Copy the following files to the to the directory where this tutorial is located:

- `kotlin-kotlin-stdlib-js-ir.js`
- `oregondsp.js`
