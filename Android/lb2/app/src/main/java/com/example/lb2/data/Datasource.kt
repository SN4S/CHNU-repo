package com.example.lb2.data

import com.example.lb2.R

class Datasource {
    fun loadExams(): List<Exam> {
        return listOf<Exam>(
            Exam(R.drawable.icon5,"БД", "Дячук"),
            Exam(R.drawable.icon6,"English","Бортник"),
            Exam(R.drawable.icon7,"Маркетинг","Дмитращук"),
            Exam(R.drawable.ic_launcher_foreground,"Мобільні додатки","Єсипчук"),
            Exam(R.drawable.icon4,"WEB","Красовський"),
            Exam(R.drawable.icon3,"Безпека програм","Остапов"),
            Exam(R.drawable.icon1,"Аналіз вимог","Комісарчук"),
            Exam(R.drawable.icon6,"Архітектура","Нікітін"))
    }
}