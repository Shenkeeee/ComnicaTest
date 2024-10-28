# Comnica Frontend Fejlesztői Teszt Megoldás

## 1. Webfelület elkészítése
**Framework választás:** React

[**Megtekintés**](https://comnica-signature.vercel.app/)

A projekt telepítéséhez szükséges parancsok:

```bash
git clone https://github.com/Shenkeeee/ComnicaTest.git
npm install
npm start
```

## 2. Gomb Események Hiányának Lehetséges Okai

**Legvalószínűbb ok:**

Egy láthatatlan vagy átlátszó elem van a gomb fölött, ami miatt nem érzékeli az eseményeket, például a z-index beállítás miatt.

## 3. Felhasználók és Színek Lekérése

```javascript
async function fetchUsersAndAssignColors() {
  try {
    // Felhasználók lekérése
    const usersResponse = await fetch('https://api.example.com/users');

    if (!usersResponse.ok) {
      throw new Error('Failed to fetch users');
    }

    const users = await usersResponse.json();

    if (users.length === 0) {
      console.warn('No users available');
      return;
    }

    // Színek lekérése
    const colorsResponse = await fetch('https://api.example.com/colors');

    if (!colorsResponse.ok) {
      throw new Error('Failed to fetch colors');
    }

    const colors = await colorsResponse.json();

    const availableColors = [...colors];
    const usersWithColors = users.map(user => {
      if (availableColors.length === 0) {
        console.warn('No more colors available');
        return { ...user, color: null };
      }

      // Szín véletlenszerű kiválasztása az elérhetőekből
      const randomIndex = Math.floor(Math.random() * availableColors.length);
      const chosenColor = availableColors[randomIndex];

      // A kiválasztott szín eltávolítása az elérhetőekből
      availableColors.splice(randomIndex, 1);

      return {
        ...user,
        color: chosenColor,
      };
    });

    console.log(usersWithColors);
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log('Fetch process completed.');
  }
}

```

## 4. Floating Label Problémák

Néhány példa:

1. A lebegő címkék animációja zavaró lehet, különösen, ha túl gyors vagy túl lassú.

2. Ha a lebegő címke színe nem kontrasztos a háttérrel, nehezen látható. Ez különösen problémás lehet a gyengénlátó vagy fogyatékkal élő felhasználók számára.

3. A felhasználók azt hihetik, hogy a mező már ki van töltve.


## Záró Megjegyzés 

Köszönöm a lehetőséget, szép napot! 🫡✌️

Máté
