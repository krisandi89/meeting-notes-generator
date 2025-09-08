{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red109\green115\blue120;\red23\green24\blue24;\red202\green202\blue202;
\red183\green111\blue247;\red113\green192\blue131;\red212\green212\blue212;\red54\green192\blue160;\red246\green124\blue48;
}
{\*\expandedcolortbl;;\cssrgb\c50196\c52549\c54510;\cssrgb\c11765\c12157\c12549;\cssrgb\c83137\c83137\c83137;
\cssrgb\c77255\c54118\c97647;\cssrgb\c50588\c78824\c58431;\cssrgb\c86275\c86275\c86275;\cssrgb\c23922\c78824\c69020;\cssrgb\c98039\c56471\c24314;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // api/getNotes.js\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 // Ini adalah contoh menggunakan Firestore. Anda perlu setup Firebase Admin.\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 import\cf4 \strokec4  admin \cf5 \strokec5 from\cf4 \strokec4  \cf6 \strokec6 'firebase-admin'\cf7 \strokec7 ;\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 // Inisialisasi Firebase Admin (lakukan sekali saja)\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 if\cf4 \strokec4  \cf7 \strokec7 (!\cf4 \strokec4 admin\cf7 \strokec7 .\cf4 \strokec4 apps\cf7 \strokec7 .\cf4 \strokec4 length\cf7 \strokec7 )\cf4 \strokec4  \cf7 \strokec7 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   admin\cf7 \strokec7 .\cf4 \strokec4 initializeApp\cf7 \strokec7 (\{\cf4 \cb1 \strokec4 \
\cb3     credential\cf7 \strokec7 :\cf4 \strokec4  admin\cf7 \strokec7 .\cf4 \strokec4 credential\cf7 \strokec7 .\cf4 \strokec4 cert\cf7 \strokec7 (\cf8 \strokec8 JSON\cf7 \strokec7 .\cf4 \strokec4 parse\cf7 \strokec7 (\cf4 \strokec4 process\cf7 \strokec7 .\cf4 \strokec4 env\cf7 \strokec7 .\cf8 \strokec8 FIREBASE_SERVICE_ACCOUNT_KEY\cf7 \strokec7 ))\cf4 \cb1 \strokec4 \
\cb3   \cf7 \strokec7 \});\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 \}\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 const\cf4 \strokec4  db \cf7 \strokec7 =\cf4 \strokec4  admin\cf7 \strokec7 .\cf4 \strokec4 firestore\cf7 \strokec7 ();\cf4 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 export\cf4 \strokec4  \cf5 \strokec5 default\cf4 \strokec4  \cf5 \strokec5 async\cf4 \strokec4  \cf7 \strokec7 (\cf4 \strokec4 req\cf7 \strokec7 ,\cf4 \strokec4  res\cf7 \strokec7 )\cf4 \strokec4  \cf7 \strokec7 =>\cf4 \strokec4  \cf7 \strokec7 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 try\cf4 \strokec4  \cf7 \strokec7 \{\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  snapshot \cf7 \strokec7 =\cf4 \strokec4  \cf5 \strokec5 await\cf4 \strokec4  db\cf7 \strokec7 .\cf4 \strokec4 collection\cf7 \strokec7 (\cf6 \strokec6 'notes'\cf7 \strokec7 ).\cf4 \strokec4 orderBy\cf7 \strokec7 (\cf6 \strokec6 'updatedAt'\cf7 \strokec7 ,\cf4 \strokec4  \cf6 \strokec6 'desc'\cf7 \strokec7 ).\cf5 \strokec5 get\cf7 \strokec7 ();\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  notes \cf7 \strokec7 =\cf4 \strokec4  snapshot\cf7 \strokec7 .\cf4 \strokec4 docs\cf7 \strokec7 .\cf4 \strokec4 map\cf7 \strokec7 (\cf4 \strokec4 doc \cf7 \strokec7 =>\cf4 \strokec4  \cf7 \strokec7 (\{\cf4 \strokec4  id\cf7 \strokec7 :\cf4 \strokec4  doc\cf7 \strokec7 .\cf4 \strokec4 id\cf7 \strokec7 ,\cf4 \strokec4  \cf7 \strokec7 ...\cf4 \strokec4 doc\cf7 \strokec7 .\cf4 \strokec4 data\cf7 \strokec7 ()\cf4 \strokec4  \cf7 \strokec7 \}));\cf4 \cb1 \strokec4 \
\cb3     res\cf7 \strokec7 .\cf4 \strokec4 status\cf7 \strokec7 (\cf9 \strokec9 200\cf7 \strokec7 ).\cf4 \strokec4 json\cf7 \strokec7 (\cf4 \strokec4 notes\cf7 \strokec7 );\cf4 \cb1 \strokec4 \
\cb3   \cf7 \strokec7 \}\cf4 \strokec4  \cf5 \strokec5 catch\cf4 \strokec4  \cf7 \strokec7 (\cf4 \strokec4 error\cf7 \strokec7 )\cf4 \strokec4  \cf7 \strokec7 \{\cf4 \cb1 \strokec4 \
\cb3     res\cf7 \strokec7 .\cf4 \strokec4 status\cf7 \strokec7 (\cf9 \strokec9 500\cf7 \strokec7 ).\cf4 \strokec4 json\cf7 \strokec7 (\{\cf4 \strokec4  error\cf7 \strokec7 :\cf4 \strokec4  \cf6 \strokec6 'Gagal mengambil catatan'\cf4 \strokec4  \cf7 \strokec7 \});\cf4 \cb1 \strokec4 \
\cb3   \cf7 \strokec7 \}\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 \};\cf4 \cb1 \strokec4 \
\
}