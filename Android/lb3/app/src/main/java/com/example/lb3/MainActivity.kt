package com.example.lb3

import android.annotation.SuppressLint
import android.content.ContentValues.TAG
import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import com.example.lb3.model.AddScreenViewModel
import com.example.lb3.model.MainActivityViewModel
import com.example.lb3.model.ProfileViewModel
import com.example.lb3.screens.AddScreen
import com.example.lb3.screens.HomeScreen
import com.example.lb3.screens.ProfileScreen
import com.example.lb3.ui.theme.Lb3Theme
import com.google.android.material.bottomnavigation.BottomNavigationView

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            Lb3Theme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    Navigatin()
                }
            }
        }
    }

    @Composable
    fun Navigatin(){
        val viewModel: AddScreenViewModel = viewModel()
        val mainViewModel: MainActivityViewModel = viewModel()
        val profViewModel: ProfileViewModel = viewModel()
        val navController = rememberNavController()
        NavHost(
            navController = navController,
            startDestination = "home"
        ){
            composable("home"){
                HomeScreen(navController,mainViewModel)
            }
            composable("profile"){
                ProfileScreen(navController,profViewModel)
            }
            composable("add"){
                AddScreen(navController, viewModel, mainViewModel)
            }
        }
    }

    override fun onStart() {
        super.onStart()
        Log.d(TAG, "OnStart Called")
    }

    override fun onResume() {
        super.onResume()
        println("Welcome back")
        Log.d(TAG, "OnResume Called")
    }
    override fun onRestart() {
        super.onRestart()
        Log.d(TAG, "onRestart Called")
    }
    override fun onPause() {
        super.onPause()
        Log.d(TAG, "onPause Called")
    }
    override fun onStop() {
        super.onStop()
        Log.d(TAG, "onStop Called")
    }
    override fun onDestroy() {
        super.onDestroy()
        super.viewModelStore.clear();
        Log.d(TAG, "onDestroy Called")
    }
}
