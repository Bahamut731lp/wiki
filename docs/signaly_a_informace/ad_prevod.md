# AD Převod

## Vzorkování
Vzorkování je proces převodu spojitého signálu na diskrétní signál. To znamená, že místo toho, aby byl signál sledován nepřetržitě, je měřen v pravidelných intervalech. Tomuto intervalu se říká _vzorkovací frekvence_.

!!! important "Vzorkovací teorém"
    Podle Nyquistova-Shannonova vzorkovacího teorému musí být vzorkovací frekvence alespoň dvojnásobkem nejvyšší frekvence přítomné v signálu, aby mohl být signál přesně rekonstruován bez ztráty informace. Tato frekvence se nazývá __Nyquistova frekvence__.
    
    $$
       F_s > 2 \cdot f_{max} 
    $$

## Kvantování
Kvantování je proces převodu spojitého (analogového) signálu na diskrétní (digitální) signál tím, že jeho hodnoty jsou zaokrouhleny na nejbližší hodnoty z konečné množiny úrovní. Tento proces se používá po vzorkování signálu.