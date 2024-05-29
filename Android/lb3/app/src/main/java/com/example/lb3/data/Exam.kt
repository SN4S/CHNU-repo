package com.example.lb3.data

import androidx.annotation.DrawableRes
import androidx.annotation.StringRes

data class Exam(
    @DrawableRes val subjectLogoId: Int,
    val subjectName: String,
    val teacherName : String
)