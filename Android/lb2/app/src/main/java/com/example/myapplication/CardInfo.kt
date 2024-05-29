package com.example.myapplication

import androidx.annotation.DrawableRes
import androidx.annotation.StringRes

data class CardInfo (
    val cardname: String = "card",
    @DrawableRes val imageId: Int
)