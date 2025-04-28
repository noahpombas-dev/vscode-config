
# 🎯 VS Code Configuration Files

Welcome to the **VS Code Configuration Repository**!

Inside the `src/` folder, you'll find:
- **extensions/** — a folder containing your VS Code extensions.
- **keybindings.json** — your customized keyboard shortcuts.
- **settings.json** — your personalized settings.

These files were originally exported from a **Windows** environment but are portable to **Linux**, **macOS**, **Raspberry Pi OS**, and others.

---

## 📂 Folder Structure

```
src/
├── extensions/
│   ├── extension-1/
│   └── ...
├── keybindings.json
└── settings.json
```

---

## ⚡ How to Move These Files

VS Code stores user settings and extensions in different locations based on your operating system.

| System            | Settings & Keybindings Location           | Extensions Location                    |
|-------------------|--------------------------------------------|----------------------------------------|
| **Windows**        | `%APPDATA%\Code\User\`                    | `%USERPROFILE%\.vscode\extensions\`    |
| **Linux**          | `~/.config/Code/User/`                    | `~/.vscode/extensions/`                |
| **Raspberry Pi**   | `~/.config/Code/User/`                    | `~/.vscode/extensions/`                |
| **macOS**          | `~/Library/Application Support/Code/User/` | `~/.vscode/extensions/`               |

---

## ✨ Steps

### 1. Move Settings and Keybindings

Copy `settings.json` and `keybindings.json` to your system's **User** folder.

- **Windows** (Command Prompt / PowerShell):
  ```powershell
  copy src\settings.json %APPDATA%\Code\User\
  copy src\keybindings.json %APPDATA%\Code\User\
  ```

- **Linux / Raspberry Pi** (Terminal):
  ```bash
  cp src/settings.json ~/.config/Code/User/
  cp src/keybindings.json ~/.config/Code/User/
  ```

- **macOS** (Terminal):
  ```bash
  cp src/settings.json ~/Library/Application\ Support/Code/User/
  cp src/keybindings.json ~/Library/Application\ Support/Code/User/
  ```

---

### 2. Move Extensions

Copy **the content** of `src/extensions/` into your system’s `.vscode/extensions/` directory — not the `extensions/` folder itself.

- **Windows** (Command Prompt / PowerShell):
  ```powershell
  xcopy src\extensions\* %USERPROFILE%\.vscode\extensions\ /E /I
  ```

- **Linux / Raspberry Pi / macOS** (Terminal):
  ```bash
  cp -r src/extensions/* ~/.vscode/extensions/
  ```

> ⚠️ Make sure individual extension folders are directly inside `.vscode/extensions/`.

---

## 🛠 Additional Notes

- **VS Code Insiders**:
  - Settings: `~/.config/Code - Insiders/User/`
  - Extensions: `~/.vscode-insiders/extensions/`
  
- **VSCodium**:
  - Settings: `~/.config/VSCodium/User/`
  - Extensions: `~/.vscode-oss/extensions/`

---

## ✅ Final Checklist

- [x] Copy `settings.json` and `keybindings.json` into the User folder
- [x] Copy **contents** of `src/extensions/` into the `.vscode/extensions/` directory
- [x] Restart VS Code
- [x] Confirm settings and extensions are applied

---

## 🧡 License

Released under the [MIT License](LICENSE).

---

## 📜 List of Extensions

Here are all the extensions currently in the `src/extensions/` folder:

---

### 1. **vscode-icons-mac**  
**Publisher:** `wayou liu`  
🔹 Adds Mac-inspired icons for file types and directories in VS Code, making your workspace more visually appealing.

---

### 2. **Time**  
**Publisher:** `Nerds Inc`  
🕒 A simple extension that displays the current time in your status bar.

---

### 3. **SQLite**  
**Publisher:** `alexcvzzz`  
📊 A SQLite extension for VS Code, allowing you to interact with SQLite databases directly from the editor.

---

### 4. **Python**  
**Publisher:** `Microsoft`  
🐍 Provides support for Python development, including IntelliSense, linting, debugging, code navigation, and more.

---

### 5. **Python Debugger**  
**Publisher:** `Microsoft`  
🐞 Adds debugging functionality for Python code in VS Code, allowing you to set breakpoints and inspect code execution.

---

### 6. **Pylance**  
**Publisher:** `Microsoft`  
💨 A fast and feature-rich language server for Python, providing IntelliSense, type checking, and other advanced features.

---

### 7. **Prettier - Code Formatter**  
**Publisher:** `Prettier`  
🎨 An opinionated code formatter that supports many languages, including JavaScript, TypeScript, HTML, CSS, and more.

---

### 8. **PlatformIO IDE**  
**Publisher:** `PlatformIO`  
🛠 A powerful ecosystem for embedded development that supports multiple platforms and frameworks, all within VS Code.

---

### 9. **PHP Profiler**  
**Publisher:** `DEVSENSE`  
📈 A profiler for PHP, helping you analyze the performance of your PHP code and optimize its execution.

---

### 10. **PHP**  
**Publisher:** `DEVSENSE`  
💻 Adds PHP support to VS Code, including IntelliSense, debugging, and syntax highlighting for PHP files.

---

### 11. **IntelliPHP**  
**Publisher:** `DEVSENSE`  
🚀 Improves PHP development with features like code completion, navigation, and debugging within VS Code.

---

### 12. **Composer**  
**Publisher:** `DEVSENSE`  
🧩 Integrates Composer (PHP package manager) into VS Code, enabling you to manage dependencies directly from the editor.

---

### 13. **Peacock**  
**Publisher:** `John Papa`  
🌈 Allows you to change the color of your VS Code workspace, making it easy to differentiate between different projects.

---

### 14. **Path Intellisense**  
**Publisher:** `Christian Kohler`  
🔍 Autocompletes filenames and paths in your code, making it quicker to add file references in VS Code.

---

### 15. **npm Intellisense**  
**Publisher:** `Christian Kohler`  
📦 Provides IntelliSense for npm modules, allowing you to auto-complete module names and easily navigate dependencies.

---

### 16. **Lunar Pink Theme**  
**Publisher:** `Nícolas D. Schmidt`  
🌙 A pink-themed color palette for VS Code that provides a vibrant and attractive editor experience.

---

### 17. **JavaScript (ES6) Code Snippets**  
**Publisher:** `charalampos karypidis`  
⚡ Adds snippets for ES6 features in JavaScript, such as arrow functions, classes, and more, to help you write code faster.

---

### 18. **ESLint**  
**Publisher:** `Microsoft`  
🚨 Integrates ESLint into VS Code, providing linting for JavaScript and TypeScript, helping you maintain clean and error-free code.

---

### 19. **Discord Rich Presence Connect**  
**Publisher:** `GlobalArt`  
🎮 Connects your VS Code to Discord, displaying what you are working on in real-time as a rich presence.

---

### 20. **C/C++**  
**Publisher:** `Microsoft`  
🖥 Adds full IntelliSense, debugging, and code navigation support for C and C++ programming languages.

---

### 21. **Apc Customize UI++**  
**Publisher:** `drcika`  
🎨 Customizes the UI of VS Code, allowing for tweaks to the appearance of the editor.

---

### 22. **npm**  
**Publisher:** `eg2`  
📦 Adds npm support to VS Code, allowing you to manage your npm packages and run npm scripts directly from the editor.

---
