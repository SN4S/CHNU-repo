package com.example.lb3.model

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel

class AddScreenViewModel :ViewModel(){
    var sname by mutableStateOf("")
    var teacher by mutableStateOf("")
}
