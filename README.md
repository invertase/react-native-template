# Invertase - React Native Template

Quick start React Native template with the following:

- TypeScript
- Prettier / ESLint
- @react-navigation
- @react-native-firebase/app
- react-native-paper
- react-native-vector-icons
- Basic theme hook

## Usage

```bash
npx react-native init <name> --template @invertase/react-native-template
```

Add the `google-services.json` & `GoogleService-Info.plist` file from the Firebase Console.

```bash
# iOS
cd ios && pod install --repo-update

npx react-native run-android
# or
npx react-native run-ios
```
