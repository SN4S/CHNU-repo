package com.example.lb3.screens

import android.annotation.SuppressLint
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.enableEdgeToEdge
import androidx.activity.viewModels
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AccountCircle
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Check
import androidx.compose.material.icons.filled.Edit
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Info
import androidx.compose.material3.BottomAppBar
import androidx.compose.material3.Button
import androidx.compose.material3.Card
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
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavController
import androidx.navigation.NavHostController
import com.example.lb3.MainActivity
import com.example.lb3.data.Exam
import com.example.lb3.model.MainActivityViewModel
import com.google.android.material.bottomappbar.BottomAppBar


@OptIn(ExperimentalMaterial3Api::class)
@SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")
@Composable
fun HomeScreen(navController: NavHostController,vmain:MainActivityViewModel){
    Scaffold(topBar = {
        TopAppBar(
            title = {
                Text("Предмети")
            }
        )},floatingActionButton = {FloatingActionButton(onClick = { navController.navigate("add")}) {
            Icon(Icons.Default.Add, contentDescription = "Додати предмет") }
        },bottomBar = {
            BottomAppBar(actions = {
                    IconButton(onClick = { /* do something */ }) {
                        Icon(Icons.Filled.Info, contentDescription = "Home")
                    }
                    IconButton(onClick = { navController.navigate("profile") }) {
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
            GridExam(list = vmain.list)

            Spacer(modifier = Modifier.height(16.dp))

            Button(onClick = {navController.navigate("profile") }) {
                Text(text = "Go to second" )
            }
        }
        
    }

}
@Composable
fun GridExam(list: MutableList<Exam>,modifier: Modifier= Modifier){
    LazyVerticalGrid(columns = GridCells.Adaptive(minSize = 168.dp),
        modifier = Modifier
            .padding(10.dp)
            .fillMaxWidth(),
        verticalArrangement = Arrangement.spacedBy(10.dp),
        horizontalArrangement = Arrangement.spacedBy(10.dp))
    {items(list){
            list -> HorExamCard(exam = list) }

    }
}

@Composable
fun HorExamCard(exam: Exam, modifier: Modifier = Modifier) {
    Card(modifier = Modifier
        .width(190.dp)) {
        Image(
            painter = painterResource(id = exam.subjectLogoId),
            contentDescription = exam.subjectName,
            modifier = Modifier
                .fillMaxWidth()
                .padding(14.dp, 14.dp, 14.dp, 0.dp,)
                .height(154.dp)
                .clip(RoundedCornerShape(14.dp))
                .background(color = Color(255, 255, 255,))
            , contentScale = ContentScale.FillHeight
        )
        Text(
            text = exam.subjectName,
            modifier = Modifier
                .padding(18.dp,6.dp,16.dp,0.dp),
            softWrap = false,
            style = MaterialTheme.typography.headlineSmall
        )
        Text(
            text = exam.teacherName,
            modifier = Modifier
                .padding(18.dp,0.dp,16.dp,10.dp),
            style = MaterialTheme.typography.labelLarge
        )

    }
}