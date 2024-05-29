package com.example.lb3.screens

import android.annotation.SuppressLint
import android.os.Bundle
import android.provider.ContactsContract.Profile
import androidx.activity.ComponentActivity
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AccountCircle
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Info
import androidx.compose.material3.BottomAppBar
import androidx.compose.material3.Button
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.FloatingActionButton
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.navigation.NavHostController
import com.example.lb3.R
import com.example.lb3.model.ProfileViewModel

@OptIn(ExperimentalMaterial3Api::class)
@SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")
@Composable
fun ProfileScreen(navController: NavHostController, viewModel: ProfileViewModel){
    var text by remember { mutableStateOf("") }
    Scaffold(topBar = {
        TopAppBar(
            title = {
                Text("Профіль")
            }
        )},bottomBar = {
        BottomAppBar(actions = {
            IconButton(onClick = { navController.navigate("home") }) {
                Icon(Icons.Filled.Info, contentDescription = "Home")
            }
            IconButton(onClick = {  }) {
                Icon(
                    Icons.Filled.AccountCircle,
                    contentDescription = "Profile",
                )
            }
        }
        ) })
    { innerPadding ->
        Column(modifier = Modifier
            .fillMaxSize()
            .padding(0.dp, 56.dp, 0.dp, 70.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center)
        {
            Image(
                painter = painterResource(id = R.drawable.icon6),
                contentDescription = "LOGO",
                modifier = Modifier
                    .padding(14.dp, 14.dp, 14.dp, 0.dp,)
                    .height(164.dp)
                    .clip(RoundedCornerShape(140.dp))
                    .background(color = Color(255, 255, 255,))
                , contentScale = ContentScale.FillHeight
            )
            Text(text = "USER", style = MaterialTheme.typography.headlineMedium, modifier = Modifier.padding(20.dp,20.dp))
            TextField(value = viewModel.fname,
                onValueChange = { newValue ->
                    viewModel.fname = newValue
                },
                label = { Text("Ім'я") },
                singleLine = true,
                modifier = Modifier.padding(20.dp,20.dp)
            )
            TextField(value = viewModel.sname,
                onValueChange = { newValue ->
                    viewModel.sname = newValue
                },
                label = { Text("Прізвище") },
                singleLine = true,
                modifier = Modifier.padding(20.dp,20.dp)
            )

            TextField(value = viewModel.group,
                onValueChange = { newValue ->
                    viewModel.group = newValue
                },
                label = { Text("Група") },
                singleLine = true,
                modifier = Modifier.padding(20.dp,20.dp)
            )

        }

    }

}