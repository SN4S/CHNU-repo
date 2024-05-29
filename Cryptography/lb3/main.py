SUBSTITUTION_TABLE = {
    'А': 0, 'Б': 1, 'В': 2, 'Г': 3, 'Д': 4, 'Е': 5, 'Ж': 6, 'З': 7, 'И': 8, 'Й': 9,
    'К': 10, 'Л': 11, 'М': 12, 'Н': 13, 'О': 14, 'П': 15, 'Р': 16, 'С': 17, 'Т': 18,
    'У': 19, 'Ф': 20, 'Х': 21, 'Ц': 22, 'Ч': 23, 'Ш': 24, 'Щ': 25, 'Ъ': 26, 'Ы': 27,
    'Ь': 28, 'Э': 29, 'Ю': 30, 'Я': 31, ' ': 32
}


def read_file(filename):
    with open(filename, 'r', encoding='utf-8') as file:
        return file.read()


def write_file(filename, data):
    with open(filename, 'w', encoding='utf-8') as file:
        file.write(data)


def encrypt(message, key):
    cipher = ''
    lent = len(message)
    gamma = generate_gamma(lent, key)
    for i in range(len(message)):
        substitution_index = SUBSTITUTION_TABLE.get(message[i], 0)
        cipher_char = (substitution_index + gamma[i]) % 33
        cipher += list(SUBSTITUTION_TABLE.keys())[list(SUBSTITUTION_TABLE.values()).index(cipher_char)]
    return cipher


def generate_gamma(length, key):
    gamma = []
    for i in range(length):
        gamma_value = (key[i % 3] + i) % 33
        gamma.append(gamma_value)
    return gamma


def decrypt(cipher, key):
    message = ''
    gamma = generate_gamma(len(cipher), key)
    for i in range(len(cipher)):
        substitution_index = SUBSTITUTION_TABLE.get(cipher[i], 0)
        message_char = (substitution_index - gamma[i]) % 33
        message += list(SUBSTITUTION_TABLE.keys())[list(SUBSTITUTION_TABLE.values()).index(message_char)]
    print(gamma)
    return message


def keyinput():
    while True:
        try:
            keys = tuple(map(int, input("Введіть секретний ключ (три числа через пробіл): ").split()))
            if len(keys) != 3:
                raise ValueError("Будь ласка, введіть рівно три числа.")
            return keys
        except ValueError as e:
            print(e)


# Шифрування
key = keyinput()
plaintext = read_file('text.txt')
cipher_text = encrypt(plaintext, key)
write_file('modtext.txt', cipher_text)


# Розшифрування
cipher_text = read_file('modtext.txt')
decrypted_text = decrypt(cipher_text, key)

# Запис розшифрованого тексту у файл
print("Розшифрований текст:", decrypted_text)
write_file('unmodtext.txt', decrypted_text)
