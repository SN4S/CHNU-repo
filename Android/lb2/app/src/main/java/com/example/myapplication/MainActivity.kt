package com.example.myapplication

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.myapplication.ui.theme.MyApplicationTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MyApplicationTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    RunApp()
                }
            }
        }
    }
}

@Preview
@Composable
fun RunApp(){
    VerticalList(list = DB().InfoRet())
}

@Composable
fun AppCard(card: CardInfo, modifier: Modifier = Modifier){
    Card(modifier= modifier,  elevation = CardDefaults.cardElevation(
        defaultElevation = 6.dp
    ) ) {
        Column {
            Image(painter = painterResource(id = card.imageId),
                contentDescription = card.cardname,
                modifier = Modifier
                    .height(200.dp)
                    .fillMaxWidth()
                    .padding(14.dp)
                    .clip(RoundedCornerShape(5)),
                contentScale = ContentScale.FillBounds)
            Text(text = card.cardname,
                modifier = Modifier
                    .padding(20.dp,0.dp,16.dp,16.dp),
                style = MaterialTheme.typography.titleMedium)
        }

    }

}

@Preview
@Composable
private fun AppCardPrev(){
    AppCard(CardInfo("Test", R.drawable.android_recovery_icon))
}

@Composable
fun VerticalList(list: Map<String, List<CardInfo>>){
    LazyColumn(contentPadding = PaddingValues(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)){
        items(list){item: CardInfo ->
            AppCard(card = item)

        }
    }
}

@Composable
fun HorizontalList(list: Map<String, List<CardInfo>>){
    LazyRow(contentPadding = PaddingValues(16.dp),
        horizontalArrangement = Arrangement.spacedBy(16.dp),
        verticalAlignment = Alignment.CenterVertically,
        modifier = Modifier
            .fillMaxSize()){
        items(list){item: CardInfo ->
            AppCard(card = item)

        }
    }
}

@Composable
fun VerGrid(list: Map<String, List<CardInfo>>){
    LazyVerticalGrid(columns = GridCells.Adaptive(minSize = 128.dp),
        verticalArrangement = Arrangement.spacedBy(14.dp),
        horizontalArrangement = Arrangement.spacedBy(14.dp)){
        items(list){card->
            AppCard(card = card)
        }
    }
}

@Preview
@Composable
fun VerListPrev(){
    VerticalList(list = DB().InfoRet())
}

@Preview
@Composable
fun HorListPrev(){
    HorizontalList(list = DB().InfoRet())
}

@Preview
@Composable
fun GridPrev(){
    VerGrid(list = DB().InfoRet())
}


