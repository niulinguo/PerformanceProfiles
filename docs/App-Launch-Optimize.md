# App Launch Optimize

App 的三种启动方式

1. 冷启动
2. 热启动
3. 温启动



App 启动事件测量方式

``` shell script
adb shell am start -W com.lingo.performance/.ItemListActivity
```

热启动结果
``` text
Starting: Intent { act=android.intent.action.MAIN cat=[android.intent.category.LAUNCHER] cmp=com.lingo.performance/.ItemListActivity }
Warning: Activity not started, its current task has been brought to the front
Status: ok
LaunchState: HOT
Activity: com.lingo.performance/.ItemListActivity
TotalTime: 96
WaitTime: 121
Complete
```

冷启动结果
``` text
Starting: Intent { act=android.intent.action.MAIN cat=[android.intent.category.LAUNCHER] cmp=com.lingo.performance/.ItemListActivity }
Status: ok
LaunchState: COLD
Activity: com.lingo.performance/.ItemListActivity
TotalTime: 730
WaitTime: 732
Complete
```

温启动结果
``` text
Starting: Intent { act=android.intent.action.MAIN cat=[android.intent.category.LAUNCHER] cmp=com.lingo.performance/.ItemListActivity }
Status: ok
LaunchState: WARM
Activity: com.lingo.performance/.ItemListActivity
TotalTime: 169
WaitTime: 172
Complete
```

TotalTime: 所有 Activity 启动耗时
WaitTime: AMS 启动 Activity 的总耗时

adb 命令测量启动耗时
1. 线下使用方便，不能带到线上
2. 非严谨、精确时间

手动打点

