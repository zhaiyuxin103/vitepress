## Android Studio Fails to Detect the Emulator After Successful Creation

### Description

![file](/images/Flutter/开发环境部署问题汇总/question_one_1.png)

![file](/images/Flutter/开发环境部署问题汇总/question_one_2.png)

### Solution

1. Open the **File** menu in the upper-left corner and choose **Project Structure**.

   ![file](/images/Flutter/开发环境部署问题汇总/question_one_3.png)

2. Under **Project SDK**, select **Android SDK**.

   ![file](/images/Flutter/开发环境部署问题汇总/question_one_4.png)

3. Click **Apply** and then **OK** in the lower-right corner to save the configuration.

   ![file](/images/Flutter/开发环境部署问题汇总/question_one_5.png)

4. Android Studio should now detect the emulator automatically.

   ![file](/images/Flutter/开发环境部署问题汇总/question_one_6.png)

## `flutter doctor` Reports `NO_PROXY` Is Not Set

### Description

![file](/images/Flutter/开发环境部署问题汇总/question_two_1.png)

### Solution

Add the following key-value pair to your [environment variables](/en/other/setup-environment-variables):

```text
NO_PROXY=localhost,127.0.0.1,LOCALHOST
```

## Running the Project Hangs at “Running Gradle task 'assembleDebug'”

Here are several approaches you can try:

1. **Switch to Mirror Repositories**

   - In the Flutter SDK directory, open `packages/flutter_tools/gradle/flutter.gradle` and adjust the repository list as follows:

     ```groovy
     repositories {
        // google()
        // jcenter()
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' }
        maven { url 'http://maven.aliyun.com/nexus/content/groups/public' }
     }
     ```

   - Inside your Flutter project, open `android/build.gradle` and update the repository blocks:

     ```groovy
     buildscript {
        ext.kotlin_version = '1.3.50'
        repositories {
           // google()
           // jcenter()
           maven { url 'https://maven.aliyun.com/repository/google' }
           maven { url 'https://maven.aliyun.com/repository/jcenter' }
           maven { url 'http://maven.aliyun.com/nexus/content/groups/public' }
        }
     }
     allprojects {
        repositories {
           // google()
           // jcenter()
           maven { url 'https://maven.aliyun.com/repository/google' }
           maven { url 'https://maven.aliyun.com/repository/jcenter' }
           maven { url 'http://maven.aliyun.com/nexus/content/groups/public' }
        }
     }
     ```

2. **Set Your Proxy/VPN to Global Mode** and choose an overseas node (avoid Hong Kong, Taiwan, etc.).

3. **Adjust the Gradle Wrapper Version**

   - In `android/gradle/wrapper/gradle-wrapper.properties`, replace `distributionUrl=https\://services.gradle.org/distributions/gradle-*.*.*-all.zip` with `distributionUrl=https\://services.gradle.org/distributions/gradle-6.4.1-all.zip`.

4. **Clear Caches Before Retrying**

   After applying the changes above, clean up the following before you rerun the project:

   - Delete the `.gradle` directory under `C:\Users\<username>`
   - Delete `android/gradle/wrapper/gradle-wrapper.jar` inside the project
   - Run `flutter clean` at the project root
