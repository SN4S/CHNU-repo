package com.example.lb2

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Card
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.lb2.data.Datasource
import com.example.lb2.data.Exam
import com.example.lb2.ui.theme.Lb2Theme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            Lb2Theme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                ) {
                    //ExamsStart()
                    verList(list = Datasource().loadExams())
                }
            }
        }
    }
}

@Composable
fun ExamsStart(){
    val listSorted = Datasource().loadExams().sortedBy {
         exam: Exam -> exam.subjectName
    }

    val groupedList = listOf(Datasource().loadExams().groupBy {
        exam -> exam.subjectLogoId })

        //print(groupedList)
    //horList()
    GridExam(listSorted)
}

@Composable
fun ExamCard(exam: Exam, modifier: Modifier = Modifier) {
    Card(modifier = Modifier) {
        Image(
            painter = painterResource(id = exam.subjectLogoId),
            contentDescription = exam.subjectName,
            modifier = Modifier
                .fillMaxWidth()
                .padding(14.dp, 14.dp, 14.dp, 0.dp,)
                .height(154.dp)
                .clip(RoundedCornerShape(10.dp))
                .background(color = Color(255, 255, 255,))
            , contentScale = ContentScale.FillHeight
        )
        Text(
            text = exam.subjectName,
            modifier = Modifier
                .padding(18.dp,6.dp,16.dp,0.dp),
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

@Composable
fun GridExam(list: List<Exam>,modifier: Modifier= Modifier){
    LazyVerticalGrid(columns = GridCells.Fixed(2),
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

@Composable
fun verList(list: List<Exam>, modifier: Modifier=Modifier){
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(10.dp)
    ) {
        Text(text = "First", style = MaterialTheme.typography.headlineLarge)
        horLazyList(list = Datasource().loadExams())
        Text(text = "Second", style = MaterialTheme.typography.headlineLarge)
        horLazyList(list = Datasource().loadExams().sortedBy { item -> item.teacherName })
    }
}

@Composable
fun horList( modifier: Modifier=Modifier){
    Row(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        horizontalArrangement = Arrangement.spacedBy(10.dp)
    ) {
        HorCardPrev()
        HorCardPrev()
    }
}

@Preview
@Composable
fun verPrev(){
    verList(list = Datasource().loadExams())
}

@Composable
fun verLazyList(list: List<Exam>, modifier: Modifier=Modifier){
    LazyColumn(
        modifier = Modifier
            .fillMaxSize(),
        verticalArrangement = Arrangement.spacedBy(10.dp),
        contentPadding = PaddingValues(horizontal = 12.dp, vertical = 10.dp)
    ) {
        items(list){list->
            ExamCard(exam = list)
        }
    }
}

@Composable
fun horLazyList(list: List<Exam>, modifier: Modifier=Modifier){
    LazyRow(
        modifier = Modifier
            .fillMaxWidth(),
        horizontalArrangement = Arrangement.spacedBy(10.dp),
        contentPadding = PaddingValues(horizontal = 12.dp, vertical = 10.dp)
    ) {
        items(list){list->
            HorExamCard(exam = list)
        }
    }
}

@Preview
@Composable
fun CardPrev() {
    ExamCard(Exam(R.drawable.icon2,"TEST", "teacher"))
}

@Preview
@Composable
fun HorCardPrev() {
    HorExamCard(Exam(R.drawable.icon2,"TEST", "teacher"))
}

@Preview
@Composable
fun verListPrev(){
    verLazyList(list = Datasource().loadExams())
}

@Preview
@Composable
fun horListPrev(){
    horLazyList(list = Datasource().loadExams())
}

@Preview
@Composable
fun GridPrev(){
    GridExam(list = Datasource().loadExams())
}