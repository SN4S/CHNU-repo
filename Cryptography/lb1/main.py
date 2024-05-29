def encrypt(text, shift):
    encrypted_text = ""
    for char in text:
        if 'а' <= char <= 'я':
            encrypted_text += chr((ord(char) - ord('а') + shift) % 32 + ord('а'))
        else:
            encrypted_text += char
    return encrypted_text


def decrypt(encrypted_text, shift):
    decrypted_text = ""
    for char in encrypted_text:
        if 'а' <= char <= 'я':
            decrypted_text += chr((ord(char) - ord('а') - shift) % 32 + ord('а'))
        else:
            decrypted_text += char
    return decrypted_text

def count_most_common_letter(text):

    letter_counts = {}
    for char in text:
        if char.isalpha():
            char = char.upper()
            letter_counts[char] = letter_counts.get(char, 0) + 1

    most_common_letter = max(letter_counts, key=letter_counts.get)
    return most_common_letter

def find_shift(most_common_letter):

    shift = ord(most_common_letter) - ord("О")
    return shift


def main():
    mode = input("Виберіть режим (шифрування - 1, розшифрування - 2, дешифрування - 3): ")

    if mode == '1':
        shift = int(input("Введіть зміщення: "))

        with open("text.txt", 'r', encoding='utf-8') as file:
            text = file.read()

        encrypted_text = encrypt(text.lower(), shift)

        with open("text_cyphered.txt", 'w', encoding='utf-8') as file:
            file.write(encrypted_text)

        print("Done")
        print("Зашифрований текст:")
        print(encrypted_text)

    elif mode == '2':
        with open('text_cyphered.txt', 'r', encoding='utf-8') as file:
            encrypted_text = file.read()
        shift = int(input("Введіть зміщення: "))
        decrypted_text = decrypt(encrypted_text, shift)
        with open('decrypted_text.txt', 'w', encoding='utf-8') as file:
            file.write(decrypted_text)
        print("Текст розшифровано!")
        print("Розшифрований текст:")
        print(decrypted_text)

    elif mode == '3':
        with open("text_cyphered.txt", "r", encoding="utf-8") as file:
            encrypted_text = file.read()
        print("Спроба дешифрування")
        most_common_letter = count_most_common_letter(encrypted_text)
        shift = find_shift(most_common_letter)
        print("Знайдений зсув:", shift)
        decrypted_text = decrypt(encrypted_text, shift)
        print("Дешифрований текст:")
        print(decrypted_text)

    else:
        print("Неправильний вибір режиму. Спробуйте ще раз.")


if __name__ == "__main__":
    main()