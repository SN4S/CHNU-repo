UKRAINIAN_ALPHABET = 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюя'

def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

def multiplicative_inverse(a, m):
    m0, x0, x1 = m, 0, 1
    while a > 1:
        q = a // m
        m, a = a % m, m
        x0, x1 = x1 - q * x0, x0
    return x1 + m0 if x1 < 0 else x1

def affine_encrypt(text, key):
    a, b = key
    encrypted_text = ''
    for char in text:
        if char in UKRAINIAN_ALPHABET:
            char_index = UKRAINIAN_ALPHABET.index(char)
            encrypted_char_index = (a * char_index + b) % len(UKRAINIAN_ALPHABET)
            encrypted_text += UKRAINIAN_ALPHABET[encrypted_char_index]
        else:
            encrypted_text += char
    return encrypted_text

def affine_decrypt(text, key):
    a, b = key
    decrypted_text = ''
    a_inv = multiplicative_inverse(a, len(UKRAINIAN_ALPHABET))
    for char in text:
        if char in UKRAINIAN_ALPHABET:
            char_index = UKRAINIAN_ALPHABET.index(char)
            decrypted_char_index = (a_inv * (char_index - b)) % len(UKRAINIAN_ALPHABET)
            decrypted_text += UKRAINIAN_ALPHABET[decrypted_char_index]
        else:
            decrypted_text += char
    return decrypted_text

def main():
    key = (int(input("Введіть перший ключ (a): ")), int(input("Введіть другий ключ (b): ")))
    choice = input("Виберіть операцію: \n1. Шифрувати \n2. Розшифрувати\n")

    if choice == '1':
        with open("text.txt", "r", encoding="utf-8") as file:
            text = file.read()
        encrypted_text = affine_encrypt(text, key)
        with open("encrypted_result.txt", "w", encoding="utf-8") as file:
            file.write(encrypted_text)
        print("Зашифрований текст успішно записано у файл encrypted_result.txt")
    elif choice == '2':
        with open("encrypted_result.txt", "r", encoding="utf-8") as file:
            text = file.read()
        decrypted_text = affine_decrypt(text, key)
        with open("decrypted_result.txt", "w", encoding="utf-8") as file:
            file.write(decrypted_text)
        print("Розшифрований текст успішно записано у файл decrypted_result.txt")
    else:
        print("Неправильний вибір операції")

if __name__ == "__main__":
    main()