package com.example.lb4.model

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel

class ProfileViewModel: ViewModel() {
    var fname by mutableStateOf("Олександр")
    var sname by mutableStateOf("Рацой")
    var group by mutableStateOf("343Вск")
}