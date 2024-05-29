package com.example.myapplication

class DB {
    fun InfoRet(): List<CardInfo> {
        return listOf(
            CardInfo("ПКПЗ", R.drawable.android_recovery_icon),
            CardInfo("ГДК", R.drawable.cr),
            CardInfo("English", R.drawable.pe),
            CardInfo("", R.drawable.los),
            CardInfo("Sakura", R.drawable.sak),
            CardInfo("Peg", R.drawable.pg),
            CardInfo("Help", R.drawable.android_recovery_icon),
            CardInfo("Help", R.drawable.android_recovery_icon),
            ).groupBy{it.cardname}
    }
}