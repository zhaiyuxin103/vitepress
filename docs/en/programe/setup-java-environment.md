::: tip
This walkthrough uses **Windows**. Instructions for other operating systems will be added later.
:::

## Install

1. Visit the [Oracle website](https://www.oracle.com/java/technologies/javase-jdk16-downloads.html) and download the JDK version that matches your operating system and toolchain.

   ![file](/images/Java/开发环境部署/jdk.png)

2. Accept the license agreement and click the download button.

   ![file](/images/Java/开发环境部署/download.png)

3. If you don’t have an Oracle account yet, register first. You must be signed in to download.

   ![file](/images/Java/开发环境部署/login.png)

4. Once the download completes, double-click the installer to begin. Click **Next**.

   ![file](/images/Java/开发环境部署/install_1.png)

5. Choose the installation directory for the Java Development Kit, then click **Next**.

   ![file](/images/Java/开发环境部署/install_2.png)

6. When the installer finishes, you’ll see the following screen. Click **Close**.

   ![file](/images/Java/开发环境部署/install_4.png)

## Verify the Installation

Open a command prompt and run `java` and `javac`. If no errors appear, the installation succeeded.

![file](/images/Java/开发环境部署/validate_1.png)

![file](/images/Java/开发环境部署/validate_2.png)

## Hello World

1. Create a `Java` directory in your workspace, then create a `HelloWorld.java` file with the following content:

   ```java
   public class HelloWorld {
     public static void main(String[] args) {
       System.out.println("Hello World");
     }
   }
   ```

2. Compile and run the program.

   ![file](/images/Java/开发环境部署/hello_world.png)

::: tip success
:tada: Congratulations! You’ve officially mastered the world’s #1 programming language. :see_no_evil:
:::
