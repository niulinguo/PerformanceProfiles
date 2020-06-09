package com.lingo.performance;

import android.content.Context;
import android.text.TextUtils;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.UUID;

public class DeviceIdUtils {

    private static final String FILE_NAME = "deviceId.txt";

    public static String getDeviceId(Context context) {
        FileReader fileReader = null;
        BufferedReader bufferedReader = null;
        try {
            File file = context.getFileStreamPath(FILE_NAME);
            fileReader = new FileReader(file);
            bufferedReader = new BufferedReader(fileReader);
            String deviceId = bufferedReader.readLine();
            if (!TextUtils.isEmpty(deviceId)) {
                return deviceId;
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (fileReader != null) {
                try {
                    fileReader.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if (bufferedReader != null) {
                try {
                    bufferedReader.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        FileWriter fileWriter = null;
        BufferedWriter bufferedWriter = null;
        try {
            File file = context.getFileStreamPath(FILE_NAME);
            fileWriter = new FileWriter(file);
            bufferedWriter = new BufferedWriter(fileWriter);
            String deviceId = UUID.randomUUID().toString();
            bufferedWriter.write(deviceId);
            return deviceId;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        } finally {
            if (fileWriter != null) {
                try {
                    fileWriter.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if (bufferedWriter != null) {
                try {
                    bufferedWriter.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
