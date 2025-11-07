::: warning
Heads-up: Setting up the Flutter toolchain is notoriously unfriendly to developers inside mainland China. If you cannot hop the Great Firewall, you may want to stop here.
:::

## Preface

If, like me, you have never touched mobile development—no Java, no SwiftUI, no Uniapp, no React Native, no Flutter—then this walkthrough is tailor-made for you. Let’s push open the door to a brand-new world together.

Before installing Flutter, make sure you already have a [Java environment](../setup-java-environment.md) in place.

## Windows

### Use Domestic Mirrors

Add the following key-value pairs to your system [environment variables](/en/other/setup-environment-variables):

```text
PUB_HOSTED_URL = https://pub.flutter-io.cn
FLUTTER_STORAGE_BASE_URL = https://storage.flutter-io.cn
```

---

### Download the Flutter SDK

1. Go to the [official SDK releases page](https://flutter.dev/docs/development/tools/sdk/releases) and pick the build that matches your OS and tooling preferences.

   ![file](/images/Flutter/开发环境部署/sdk.png)

2. Extract the downloaded `zip` file to the directory where you plan to install Flutter. **Avoid** locations that require elevated permissions (for example `C:\Program Files\`).

3. Add the `bin` directory inside the SDK to your [environment variables](/en/other/setup-environment-variables).

### Run `flutter doctor`

Open a terminal and run `flutter doctor`. If you have not yet installed the **Android toolchain**, you should see output similar to the following:

![file](/images/Flutter/开发环境部署/doctor.png)

Next, run `flutter doctor --android-licenses` to accept the Android licenses.

> The message is quite explicit: Android SDK not found, Android Studio not installed, no available emulator. Fortunately, installing Android Studio will take care of all three issues.

### Install Android Studio

1. Head to the [Android Studio download page](https://developer.android.com/studio/index.html) and click the download button in the middle of the page.

   ![file](/images/Flutter/开发环境部署/download_page_1.png)

2. In the dialog that appears, agree to the terms and click the download button again.

   ![file](/images/Flutter/开发环境部署/download_page_2.png)

3. Launch the installer you just downloaded and click **Next**.

   ![file](/images/Flutter/开发环境部署/install_1.png)

4. Make sure **Android Virtual Device** is checked, then click **Next**.

   ![file](/images/Flutter/开发环境部署/install_2.png)

5. Choose the installation location that suits you and click **Next**.

   ![file](/images/Flutter/开发环境部署/install_3.png)

6. Click **Install**.

   ![file](/images/Flutter/开发环境部署/install_4.png)

7. When the installer finishes, you’ll see the following confirmation. Click **Next**.

   ![file](/images/Flutter/开发环境部署/install_5.png)

8. Check **Start Android Studio** and click **Finish** to launch the IDE.

   ![file](/images/Flutter/开发环境部署/install_6.png)

### Install the Android SDK

1. On first launch you should see the screen below. We can skip proxy configuration—just click **Cancel** to proceed directly to the Android SDK setup.

   ![file](/images/Flutter/开发环境部署/andriod_sdk_1.png)

2. Click **Next**.

   ![file](/images/Flutter/开发环境部署/andriod_sdk_2.png)

3. Select the Android SDK versions you wish to install and choose an installation directory, then click **Next**.

   ![file](/images/Flutter/开发环境部署/andriod_sdk_3.png)

4. Click **Finish** to start the installation.

   ![file](/images/Flutter/开发环境部署/andriod_sdk_4.png)

5. Once the setup completes, the screen should look like the following. Click **Finish** to reveal Android Studio’s full interface.

   ![file](/images/Flutter/开发环境部署/andriod_sdk_5.png)

### Create a Flutter Project

1. After Android Studio opens, you should see the welcome screen below. Click **Create New Flutter Project**.

   ![file](/images/Flutter/开发环境部署/flutter_1.png)

2. Choose **Flutter Application**, then click **Next**.

   ![file](/images/Flutter/开发环境部署/flutter_2.png)

3. If you installed the Flutter SDK to a custom directory, select it now. Configure your Flutter workspace, leave everything else as default, and click **Next**.

   ![file](/images/Flutter/开发环境部署/flutter_3.png)

4. Keep the defaults and click **Finish** to create the project.

   ![file](/images/Flutter/开发环境部署/flutter_4.png)

5. In Android Studio, open the **File** menu (top left) and choose **Settings**.

   ![file](/images/Flutter/开发环境部署/flutter_5.png)

6. On the left, select **Plugins**. At the top right, switch to the **Marketplace** tab, search for “flutter”, then click **Install** next to the Flutter plugin.

   ![file](/images/Flutter/开发环境部署/flutter_6.png)

7. Restart Android Studio once the plugin finishes installing.

   ![file](/images/Flutter/开发环境部署/flutter_7.png)

### Create an Emulator

1. Open the **Tools** menu and choose **AVD Manager**.

   ![file](/images/Flutter/开发环境部署/avd_1.png)

2. If you have never created an Android Virtual Device, the screen will look like this. Click **Create Virtual Device**.

   ![file](/images/Flutter/开发环境部署/avd_2.png)

3. Select the device hardware profile you prefer and click **Next**.

   ![file](/images/Flutter/开发环境部署/avd_3.png)

4. Pick a system image and click the **Download** link.

   ![file](/images/Flutter/开发环境部署/avd_4.png)

5. In the new dialog, agree to the terms and click **Next** to begin downloading.

   ![file](/images/Flutter/开发环境部署/avd_5.png)

6. When the download completes, you’ll see the confirmation below. Click **Finish** to return to the image list.

   ![file](/images/Flutter/开发环境部署/avd_6.png)

7. Select the image you just downloaded and click **Next**.

   ![file](/images/Flutter/开发环境部署/avd_7.png)

8. Accept the defaults and click **Finish** to create the virtual device.

   ![file](/images/Flutter/开发环境部署/avd_8.png)

9. The new emulator now appears in the list—use it to confirm creation succeeded.

   ![file](/images/Flutter/开发环境部署/avd_9.png)

### Run the Flutter Project

::: tip
From this point forward you may encounter all kinds of errors that prevent the app from running. Consult the [Flutter Environment Troubleshooting Guide](flutter-development-setup-issues.md) for help.
:::

1. Use the device selector in the upper-right corner of Android Studio to start the emulator.

   ![file](/images/Flutter/开发环境部署/device_list.png)

2. Click the **Debug** button to launch the project.

   ![file](/images/Flutter/开发环境部署/debug.png)

3. Check the emulator. If you see the following screen, :tada: congratulations—the Flutter environment is up and running!

   ![file](/images/Flutter/开发环境部署/success.png)
