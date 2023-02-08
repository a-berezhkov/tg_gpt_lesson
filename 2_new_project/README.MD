# Создание проекта на Node.js

1. Создайте пустую папку на рвбочем столе. К примеру "api"
2. Нажмите сочетание клавиш  (win + R), в появившемся окне введите CMD, должна открыться консоль
3. В консоли перейдите в созданную паку командой ```cd```, к примеру ``` cd Desktop/api```
4. Выполните команду ```npm init -y в консоли```

В результе в папке ```api``` появится файл "package.json"

5. Добавьте в файл строку  ``` "type": "module", ```
```js
//package.json"
{
  "type": "module",
    
    
  "name": "test-bot",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  
}

```
# Установка пакета "node-telegram-bot-api"

1. Наберите в консоли ```npm install node-telegram-bot-api```, после устновки всех пакетов в директории проекта
появится папка ```node_modules```