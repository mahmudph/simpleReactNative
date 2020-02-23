package com.simpleapp.device;
import android.os.Build;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class DeviceModule extends ReactContextBaseJavaModule {
   //constructor
   public DeviceModule(ReactApplicationContext reactContext) {
       super(reactContext);
   }
   //Mandatory function getName that specifies the module name
   @Override
   public String getName() {
       return "Device";
   }
   //Custom function that we are going to export to JS
   @ReactMethod
   public void getDeviceName(Callback cb) {
       try{
           cb.invoke(null, Build.MODEL);
       }catch (Exception e){
           cb.invoke(e.toString(), null);
       }
   }
}