package com.example.lb4.model

import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Text
import androidx.core.app.NotificationCompat.MessagingStyle.Message
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.example.lb4.R
import com.example.lb4.data.Datasource
import com.example.lb4.data.Exam

class MainActivityViewModel:ViewModel() {
    var list = Datasource().loadExams();

    fun addNewExam(name: String, teacher: String){
        list.add(Exam(R.drawable.icon4,name,teacher))
        println("added someshit" + name + " " + teacher)
    }
}