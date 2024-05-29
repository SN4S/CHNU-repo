package com.example.lb4

import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.safeDrawingPadding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Home
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.SnackbarHostState
import androidx.compose.material3.Surface
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi
import androidx.compose.material3.windowsizeclass.WindowSizeClass
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.navigation.NavHostController
import androidx.navigation.compose.rememberNavController
import com.example.lb4.screens.SubjectScreen

sealed class Screen(val title: String) {
    abstract fun content(modifier: Modifier): @Composable () -> Unit

}

@Composable
fun App(windowSize: WindowSizeClass){
    val navController = rememberNavController()
    if (windowSize.widthSizeClass == WindowWidthSizeClass.Compact){
        NavigationBar {
            NavigationBarItem(selected = true, onClick = { /*TODO*/ }, icon = { Icons.Filled.Home })
        }
    }
Surface(
    modifier = Modifier
        .safeDrawingPadding()
        .fillMaxSize(),
    color = MaterialTheme.colorScheme.background,
) {

}
}

