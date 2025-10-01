### Hexlet tests and linter status:
[![Actions Status](https://github.com/JuliaLen-web/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/JuliaLen-web/frontend-project-46/actions)

[![Build project](https://github.com/JuliaLen-web/frontend-project-46/actions/workflows/nodejs.yml/badge.svg)](https://github.com/JuliaLen-web/frontend-project-46/actions/workflows/nodejs.yml)




# nodejs-package

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=JuliaLen-web_frontend-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=JuliaLen-web_frontend-project-46)

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=JuliaLen-web_frontend-project-46&metric=bugs)](https://sonarcloud.io/summary/new_code?id=JuliaLen-web_frontend-project-46)

[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=JuliaLen-web_frontend-project-46&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=JuliaLen-web_frontend-project-46)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=JuliaLen-web_frontend-project-46&metric=coverage)](https://sonarcloud.io/summary/new_code?id=JuliaLen-web_frontend-project-46)

[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=JuliaLen-web_frontend-project-46&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=JuliaLen-web_frontend-project-46)

# Задача: "Сравнение плоских файлов (json)"

Диф строится на основе того, как файлы изменились относительно друг друга, ключи выводятся в алфавитном порядке. Ниже пример того, что должно получиться по результату данного шага:

file1.json -->

```
{
    "host": "hexlet.io",
    "timeout": 50,
    "proxy": "123.234.53.22",
    "follow": false
}

```
file2.json -->

```
{
    "timeout": 20,
    "verbose": true,
    "host": "hexlet.io"
}

```
result.json -->

```
{
    "host": "hexlet.io",
    "- timeout": 50,
    "+ timeout": 20,
    "- proxy": "123.234.53.22",
    "- follow": false,
    "+ verbose": true
}

```
Отсутствие плюса или минуса говорит, что ключ есть в обоих файлах, и его значения совпадают. Во всех остальных ситуациях значение по ключу либо отличается, либо ключ есть только в одном файле. В примере выше ключ timeout есть в обоих файлах, но имеет разные значения, proxy находится только в file1, а verbose только в file2.

## Требования к задаче:

+ Сравниваются данные, а не строки файлов
+ Две строчки дифа, отвечающие за различия поля, должны находиться рядом. Причём вначале должна выводиться строка относящаяся к первому файлу, а затем строка относящаяся ко второму файлу 
+ Результатом работы функции genDiff() является строка
