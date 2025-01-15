package com.embo.agent

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform