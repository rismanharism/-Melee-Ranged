# -Melee-Ranged
(2) Melee Ranged

Objectives

Mengerti keterhubungan satu function dengan function lainnya Mengerti melempar/memasukkan data hasil satu function kemudian digunakan untuk parameter function lain Mampu membuat function serupa built-in function split()
Restrictions
Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop()

Directions
Diberikan 2 function berikut.

meleeRangedGrouping()
Function ini menerima 1 parameter string. Implementasikan meleeRangedGrouping() agar dapat menghasilkan multidimensional array seperti yang diminta.
Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan:

[
  [ <daftar_hero_dengan_tipe_ranged> ],
  [ <daftar_hero_dengan_tipe_melee> ]
]
Jika input adalah string kosong ('') maka return array kosong

splitting()
Untuk memisahkan nama hero dan tipenya, implementasikan function splitting() yang telah diberikan di mana hasil dari function tersebut adalah array satu dimensi.
Jika yang diberikan 'Razor-Ranged,Meepo-Melee,Invoker-Ranged'
Output yang diharapkan splitting():

[‘Razor-Ranged’, ‘Meepo-Melee’, ‘Invoker-Ranged’]