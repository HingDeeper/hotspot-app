package com.helium.wallet.v3.generated;

import java.util.Arrays;
import java.util.List;
import org.unimodules.core.interfaces.Package;

public class BasePackageList {
  public List<Package> getPackageList() {
    return Arrays.<Package>asList(
        new expo.modules.constants.ConstantsPackage(),
        new expo.modules.filesystem.FileSystemPackage(),
        new expo.modules.haptics.HapticsPackage(),
        new expo.modules.imageloader.ImageLoaderPackage(),
        new expo.modules.localauthentication.LocalAuthenticationPackage(),
        new expo.modules.permissions.PermissionsPackage(),
        new expo.modules.securestore.SecureStorePackage()
    );
  }
}