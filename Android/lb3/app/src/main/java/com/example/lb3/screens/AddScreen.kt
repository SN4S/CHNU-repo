package com.example.lb3.screens

import android.annotation.SuppressLint
import android.os.Bundle
import android.provider.ContactsContract.Profile
import androidx.activity.ComponentActivity
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.offset
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material3.Button
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.FloatingActionButton
import androidx.compose.material3.Icon
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.navigation.NavHostController
import com.example.lb3.model.MainActivityViewModel
import com.example.lb3.model.AddScreenViewModel

@OptIn(ExperimentalMaterial3Api::class)
@SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")
@Composable
fun AddScreen(navController: NavHostController,viewModel: AddScreenViewModel,mainv: MainActivityViewModel){
        Scaffold(topBar = {
        TopAppBar(
            title = {
                Text("Додати предмет")
            }
        )
    }
        ,) { innerPadding ->
        Column(modifier = Modifier
            .fillMaxSize(),
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally) {
            
            TextField(value = viewModel.sname,
                onValueChange = { newValue ->
                    viewModel.sname = newValue},
                label = { Text("Назва предмету") },
                singleLine = true
            )
            Spacer(modifier = Modifier.height(20.dp))
            TextField(value = viewModel.teacher,
                onValueChange = { newValue ->
                                viewModel.teacher = newValue
                },
                label = { Text("Викладач") },
                singleLine = true
            )
            Spacer(modifier = Modifier.height(20.dp))

            Button(onClick = {mainv.addNewExam(viewModel.sname,viewModel.teacher)}) {
                Text(text = "Додати предмет")
            }

        }

    }
}