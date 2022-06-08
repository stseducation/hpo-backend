(function(abp){

    abp.multiTenancy = abp.multiTenancy || {};
    abp.multiTenancy.isEnabled = true;

})(abp);

(function(){

    abp.session = abp.session || {};
    abp.session.userId = null;
    abp.session.tenantId = null;
    abp.session.impersonatorUserId = null;
    abp.session.impersonatorTenantId = null;
    abp.session.multiTenancySide = 2;

})();

(function(){

    abp.localization = abp.localization || {};

    abp.localization.currentCulture = {
        name: 'en',
        displayName: 'English'
    };

    abp.localization.languages = [{
        name: 'en',
        displayName: 'English',
        icon: 'famfamfam-flags gb',
        isDisabled: false,
        isDefault: true
    } , {
        name: 'es',
        displayName: 'Español',
        icon: 'famfamfam-flags mx',
        isDisabled: false,
        isDefault: false
    }];

    abp.localization.currentLanguage = {
        name: 'en',
        displayName: 'English',
        icon: 'famfamfam-flags gb',
        isDisabled: false,
        isDefault: true
    };

    abp.localization.sources = [
        {
            name: 'Abp',
            type: 'MultiTenantLocalizationSource'
        },
        {
            name: 'AbpWeb',
            type: 'MultiTenantLocalizationSource'
        },
        {
            name: 'AbpZero',
            type: 'MultiTenantLocalizationSource'
        },
        {
            name: 'Portal',
            type: 'MultiTenantLocalizationSource'
        }
    ];

    abp.localization.values = abp.localization.values || {};

    abp.localization.values['Abp'] = {
  "AllOfTheseFeaturesMustBeEnabled": "Required features are not enabled. All of these features must be enabled: {0}",
  "AllOfThesePermissionsMustBeGranted": "Required permissions are not granted. All of these permissions must be granted: {0}",
  "AtLeastOneOfTheseFeaturesMustBeEnabled": "Required features are not enabled. At least one of these features must be enabled: {0}",
  "AtLeastOneOfThesePermissionsMustBeGranted": "Required permissions are not granted. At least one of these permissions must be granted: {0}",
  "CurrentUserDidNotLoginToTheApplication": "Current user did not login to the application!",
  "DefaultFromSenderDisplayName": "Default from (sender) display name",
  "DefaultFromSenderEmailAddress": "Default from (sender) email address",
  "DefaultLanguage": "Default language",
  "DomainName": "Domain name",
  "FeatureIsNotEnabled": "Feature is not enabled: {0}",
  "MainMenu": "Main menu",
  "Password": "Password",
  "ReceiveNotifications": "Receive notifications",
  "SmtpHost": "SMTP host",
  "SmtpPort": "SMTP port",
  "TimeZone": "Timezone",
  "UseDefaultCredentials": "Use default credentials",
  "Username": "User name",
  "UseSSL": "Use SSL"
};

    abp.localization.values['AbpWeb'] = {
  "AreYouSure": "Are you sure?",
  "Cancel": "Cancel",
  "DefaultError": "An error has occurred!",
  "DefaultError401": "You are not authenticated!",
  "DefaultError403": "You are not authorized!",
  "DefaultError404": "Resource not found!",
  "DefaultErrorDetail": "Error detail not sent by server.",
  "DefaultErrorDetail401": "You should be authenticated (sign in) in order to perform this operation.",
  "DefaultErrorDetail403": "You are not allowed to perform this operation.",
  "DefaultErrorDetail404": "The resource requested could not found on the server.",
  "EntityNotFound": "There is no entity {0} with id = {1}!",
  "InternalServerError": "An internal error occurred during your request!",
  "ValidationError": "Your request is not valid!",
  "ValidationNarrativeTitle": "The following errors were detected during validation.",
  "Yes": "Yes"
};

    abp.localization.values['AbpZero'] = {
  "CanNotDeleteAdminUser": "Can not delete user {0} since this is the default admin user!",
  "CanNotDeleteStaticRole": "Can not delete a static role: {0}",
  "CanNotRenameAdminUser": "Can not rename user name of the {0} since this is the default admin user!",
  "Email": "Email",
  "EmailSecurityCodeBody": "Your security code is: {0}",
  "EmailSecurityCodeSubject": "Security Code",
  "Identity.ConcurrencyFailure": "Optimistic concurrency failure, object has been modified.",
  "Identity.DefaultError": "An unknown failure has occurred.",
  "Identity.DuplicateEmail": "Email '{0}' is already taken.",
  "Identity.DuplicateRoleName": "Role name '{0}' is already taken.",
  "Identity.DuplicateUserName": "User name '{0}' is already taken.",
  "Identity.InvalidEmail": "Email '{0}' is invalid.",
  "Identity.InvalidPasswordHasherCompatibilityMode": "The provided PasswordHasherCompatibilityMode is invalid.",
  "Identity.InvalidPasswordHasherIterationCount": "The iteration count must be a positive integer.",
  "Identity.InvalidRoleName": "Role name '{0}' is invalid.",
  "Identity.InvalidToken": "Invalid token.",
  "Identity.InvalidUserName": "User name '{0}' is invalid, can only contain letters or digits.",
  "Identity.LoginAlreadyAssociated": "A user with this login already exists.",
  "Identity.PasswordMismatch": "Incorrect password.",
  "Identity.PasswordRequireDigit": "Passwords must have at least one digit ('0'-'9').",
  "Identity.PasswordRequireLower": "Passwords must have at least one lowercase ('a'-'z').",
  "Identity.PasswordRequireNonAlphanumeric": "Passwords must have at least one non alphanumeric character.",
  "Identity.PasswordRequireUpper": "Passwords must have at least one uppercase ('A'-'Z').",
  "Identity.PasswordTooShort": "Passwords must be at least {0} characters.",
  "Identity.RoleNotFound": "Role {0} does not exist.",
  "Identity.UserAlreadyHasPassword": "User already has a password set.",
  "Identity.UserAlreadyInRole": "User already in role '{0}'.",
  "Identity.UserLockedOut": "User is locked out.",
  "Identity.UserLockoutNotEnabled": "Lockout is not enabled for this user.",
  "Identity.UserNameNotFound": "User {0} does not exist.",
  "Identity.UserNotInRole": "User is not in role '{0}'.",
  "InvalidFeatureValue": "{0} feature value is not valid!",
  "InvalidTenancyName": "Tenancy name is not valid!",
  "OrganizationUnitDuplicateDisplayNameWarning": "There is already an organization unit with name {0}. Two units with same name can not be created in same level.",
  "RoleDisplayNameIsAlreadyTaken": "Role display name {0} is already taken.",
  "RoleNameIsAlreadyTaken": "Role name {0} is already taken.",
  "Sms": "Sms",
  "SmsSecurityCodeMessage": "Your security code is: {0}",
  "TenancyNameIsAlreadyTaken": "Tenancy name {0} is already taken."
};

    abp.localization.values['Portal'] = {
  "About": "About",
  "Actions": "Actions",
  "AdminEmailAddress": "Admin email address",
  "Administration": "Administration",
  "AdminPassword": "Admin password",
  "AlertDate": "Date reported",
  "AlertMoreDetails": "More details",
  "AlertReportedTimes": "reported {0} times",
  "Alerts": "Alerts",
  "AlertStatus": "Status",
  "AlertType": "Type",
  "AreYouSureWantToDelete": "Are you sure want to delete {0}?",
  "AreYouSureWantToImport": "Are you sure want to import these records?",
  "AuthenticationScheme": "Authentication scheme",
  "AuthenticationScheme6": "Windows Username (recommended)",
  "AuthenticationScheme8": "Username and Password",
  "AuthenticationSchemeError": "Invalid authentication scheme. Please contact system administrator.",
  "AuthenticationSchemeHelpBlock": "If all device users share the same Windows username, they will need to authenticate using a username and password.",
  "AvailableFreeSpace": "Disk space",
  "Back": "Back",
  "BreakTooltip": "Minimum break is set to",
  "BreakTooltipNone": "No minimum break is set",
  "CanBeEmptyToLoginAsHost": "Can be empty to login as host.",
  "Cancel": "Cancel",
  "Change": "Change",
  "ChangeTenant": "Change school",
  "ClearAll": "Clear all",
  "ClearOthers": "Clear others",
  "ClientDevice": "Client Device",
  "Close": "Close",
  "Configuration": "Configuration",
  "ConfirmNewPassword": "Confirm New Password",
  "ConfirmPassword": "Confirm password",
  "CouldNotCompleteLoginOperation": "Could not complete login operation. Please try again later.",
  "CouldNotValidateExternalUser": "Could not validate external user.",
  "Create": "Create",
  "CreateFacultys": "Create Faculty Members",
  "CreateGroups": "Create Groups",
  "CreateNewDevice": "Create new device",
  "CreateNewDeviceType": "Create new device type",
  "CreateNewExecutable": "Create new game",
  "CreateNewFaculty": "Create new faculty member",
  "CreateNewGroup": "Create new group",
  "CreateNewRole": "Create new role",
  "CreateNewShortcut": "Create new shortcut",
  "CreateNewStudent": "Create new student",
  "CreateNewTenant": "Create new school",
  "CreateNewUser": "Create new user",
  "CreateStudents": "Create Students",
  "CreateUsers": "Create Users",
  "CriticalDeviceSpaceHelp": "There is under 600 MB free space, recordings will not be able to function reliably. At least 600 MB is required for continuous recording.",
  "CurrentPassword": "Current Password",
  "CurrentTenant": "Current school",
  "CyberBullyingIncidents": "Cyber bullying incidents",
  "DailyPlayTooltip": "Daily play limited to",
  "DailyPlayTooltipNone": "No daily limits set",
  "DatabaseConnectionString": "Database connection string",
  "DefaultDeviceTypeName": "Default Device Type",
  "DefaultPasswordIs": "Default password is {0}",
  "Delete": "Delete",
  "DeviceDetails": "Device details",
  "DeviceLastActivity": "Last activity",
  "DeviceLastUsedBy": "Last used by",
  "DeviceName": "Device name",
  "Devices": "Devices",
  "DeviceType": "Device type",
  "DeviceTypeDetails": "Device type details",
  "DeviceTypeIsDefaultHelpBlock": "One device type can be a default device type. All newly installed devices will be initially assigned to the default device type.",
  "DeviceTypeName": "Name",
  "DeviceTypeOverlayPositionHelpBlock": "You may define the position on the screen, where the timer overlay will appear during gameplay.",
  "DeviceTypes": "Device Types",
  "DeviceTypeShortcutsHelpBlock": "You may define shortcuts to launch games, which will appear on the app.",
  "DisplayName": "Display Name",
  "DownloadClient": "Download App",
  "DowntimeWindow": "Downtime window",
  "DowntimeWindowHelpBlock": "The downtime window is the time of day when devices are not usually used for gaming. During this time, the device will perform any resource-intensive work, such as processing and uploading incident recordings.",
  "DuplicateName": "The name chosen is already in use.",
  "Edit": "Edit",
  "EditDevice": "Edit device",
  "EditDeviceType": "Edit device type",
  "EditExecutable": "Edit game",
  "EditFaculty": "Edit faculty member",
  "EditGroup": "Edit group",
  "EditIncident": "Cyber bullying incident",
  "EditRole": "Edit role",
  "EditShortcut": "Edit shortcut",
  "EditStudent": "Edit student",
  "EditSymptomAlert": "Symptoms reported multiple times",
  "EditTenant": "Edit school",
  "EditUser": "Edit user",
  "EffectiveDatesHelpBlock": "You may enter an optional date range, which will limit use of the group to this period. (Useful for tournaments where you don't want timers.)",
  "EmailAddress": "Email address",
  "End": "End",
  "ExecutableDetails": "Game details",
  "ExecutableDuplicateName": "Another game has the same name",
  "ExecutableName": "Name",
  "ExecutableProcessNames": "Monitoring rules",
  "Executables": "Games",
  "ExecutableShortcuts": "Shortcuts",
  "ExecutableType": "Type",
  "EyeStrainNoneOrBoth": "If entered, both threshold and days must be completed for eye strain.",
  "Faculty": "Faculty",
  "FacultyDetails": "Faculty member details",
  "FacultyGroups": "Groups",
  "FacultyRoles": "Roles",
  "Filter": "Filter",
  "FormIsNotValidMessage": "Form is not valid. Please check and fix errors.",
  "FullName": "Full name",
  "Game": "Game",
  "GameDuration": "Minutes Played",
  "GameSessions": "Game Activity",
  "GestureMustHaveKey": "Select a keyboard letter key or F-key.",
  "GestureMustHaveModifier": "Select at least one of Alt, Ctrl, or Shift.",
  "GestureStringFormat": "Keyboard gesture must have at least two parts.",
  "GroupCode": "Code",
  "GroupDetails": "Group details",
  "GroupEffectiveDates": "Effective dates",
  "GroupEffectiveFrom": "Effective from",
  "GroupEffectiveUntil": "Effective until",
  "GroupName": "Name",
  "Groups": "Groups",
  "GroupUsers": "Group users",
  "Home": "Home",
  "HomePage": "Home page",
  "HotKeyEnd": "End recording hotkey",
  "HotKeyHelpBlock": "Define a hotkey which will submit an incident during gameplay. The hotkey is made up of one or more modifiers (e.g. Ctrl) combined with a keyboard letter key or F-key.",
  "HotKeyStart": "Submit incident hotkey",
  "ImpersonationErrorMessageCascade": "You cannot impersonate a user when already logged in as an impersonated user.",
  "ImpersonationErrorMessageInvalidUsername": "Student {0} was not found. Please ask your admin to check your student record.",
  "Import": "Import",
  "ImportFilePlaceholder": "Choose a CSV file with columns username, email, firstname, and lastname",
  "ImportResult": "Result",
  "ImportStep1": "Choose File",
  "ImportStep2": "Review Students",
  "ImportStep3": "Select Groups",
  "ImportStep4": "Import Results",
  "ImportStudents": "Import students",
  "IncidentAlreadyProcessed": "The incident was already processed. Please ask your coach for details.",
  "IncidentAlreadySubmitted": "The incident was already submitted.",
  "IncidentDate": "Date",
  "IncidentDetails": "Incident details",
  "IncidentExpired": "The incident has expired. Please ask your coach to complete the details.",
  "IncidentGameSession": "Game session",
  "IncidentInvolvedPeople": "Involved people",
  "IncidentMoreDetails": "More details",
  "IncidentNotFound": "The incident was not found.",
  "IncidentReporter": "Reporter",
  "Incidents": "Incidents",
  "IncidentStatus": "Status",
  "IncidentSubmitted": "Thank you for submitting the incident.",
  "IncidentVideoUploaded": "Recording",
  "InvalidPasswordResetCode": "Invalid password reset code",
  "InvalidUserNameOrPassword": "Invalid user name or password",
  "IsActive": "Is active",
  "IsDefault": "Is default?",
  "LabelOptions": "Label options",
  "LeaveEmptyToSwitchToHost": "Leave empty to switch to the host",
  "LogIn": "Log in",
  "LoginFailed": "Login failed!",
  "Logout": "Logout",
  "LowDeviceSpaceHelp": "There is under one GB free space, consider freeing up some disk space. At least 600 MB is required for continuous recording.",
  "ManageDevices": "Manage Devices",
  "ManageFaculty": "Manage Faculty Members",
  "ManageGameSessions": "Manage Game Sessions",
  "ManageGroups": "Manage Groups",
  "ManageIncidents": "Manage Incidents",
  "ManageStudents": "Manage Students",
  "ManageUsers": "Manage Users",
  "MaxDailyPlayMinutes": "Max daily play",
  "MaxDailyPlayMinutesHelpBlock": "Leave empty for no overall daily limit on play.",
  "MaxSessionPlayMinutes": "Max play between breaks",
  "MaxSessionPlayMinutesHelpBlock": "Breaks are recommended at least every 50 to 90 minutes of gaming.",
  "MinBreakMinutes": "Min break",
  "MinBreakMinutesHelpBlock": "Breaks should be at least five minutes long, but 15 to 20 minutes is ideal.  If you’re experiencing a lot of stress while gaming, then the break should be longer.",
  "MinutesBack": "back",
  "MinutesForward": "forward",
  "MinutesSuffix": "minutes",
  "MinuteSuffix": "minute",
  "ModifyDevices": "Modify Devices",
  "ModifyFacultys": "Modify Faculty Members",
  "ModifyGroups": "Modify Groups",
  "ModifyStudents": "Modify Students",
  "ModifyUsers": "Modify Users",
  "Name": "First name",
  "NameSurname": "First Name Last Name",
  "NeckOrBackPainNoneOrBoth": "If entered, both threshold and days must be completed for neck or back pain.",
  "NewPassword": "New Password",
  "No": "No",
  "NoAlertsCreated": "No alerts have been created.",
  "NoIncidentsSubmitted": " has not submitted any incidents.",
  "NoSymptomsReported": " has not reported any symptoms.",
  "NoSymptomsWithoutAlerts": "No other symptoms were reported.",
  "NotSelected": "Not selected",
  "Off": "Off",
  "On": "On",
  "Optional": "Optional",
  "OrLoginWith": "Or login with",
  "OverlayPosition": "Timer position",
  "Password": "Password",
  "PasswordResetEmailSent": "If your email is in the system, we have sent you an email with further instructions.",
  "PasswordsDoNotMatch": "Passwords do not match",
  "PasswordsMustBeAtLeast8CharactersContainLowercaseUppercaseNumber": "Passwords must be at least 8 characters, contain a lowercase, uppercase, and number",
  "Permissions": "Permissions",
  "PleaseEnterLoginInformation": "Please enter login information",
  "PleaseWait": "Please wait...",
  "ReadFacultys": "Display Faculty Members",
  "ReadStudents": "Display Students",
  "ReadUsers": "Display Users",
  "Recording": "Recording",
  "RecordingDisabled": "Recording disabled",
  "RecordingEnabled": "Recording enabled",
  "RecordingMinutes": "Recording after incident",
  "RecordingMinutesBack": "Recording before incident",
  "RecordingMinutesBackHelpBlock": "The number of minutes recorded before the moment a player reports an incident.",
  "RecordingMinutesHelpBlock": "The number of minutes recorded, from the moment a player reports an incident.",
  "RecordingMode": "Recording mode",
  "RecordingModeHelpBlock": "Regular (recommended) or Full Screen (for recording full screen gaming).",
  "Refresh": "Refresh",
  "Register": "Register",
  "RegisterFormUserNameInvalidMessage": "Please don't enter an email address for username.",
  "RememberMe": "Remember me",
  "ResetPassword": "Reset Password",
  "RoleDeleteWarningMessage": "Role {0} will be deleted and unassigned from all assigned users.",
  "RoleDescription": "Role description",
  "RoleName": "Role Name",
  "Roles": "Roles",
  "Save": "Save",
  "SavedSuccessfully": "Saved successfully",
  "SearchWithThreeDot": "Search...",
  "SelectAnItem": "Select an item",
  "SessionPlayTooltip": "Play between breaks limited to",
  "SessionPlayTooltipNone": "No limits set on play between breaks",
  "Settings": "Settings",
  "ShortcutDetails": "Shortcut details",
  "ShortcutIcon": "Icon",
  "ShortcutParameters": "Parameters",
  "Shortcuts": "Shortcuts",
  "ShortcutStartIn": "Start in",
  "ShortcutTarget": "Target",
  "ShortcutType": "Type",
  "ShortcutType0": "Regular",
  "ShortcutType1": "Internet",
  "ShortcutUrl": "Url",
  "Skins": "Skins",
  "Start": "Start",
  "StartTyping": "Start Typing",
  "Student": "Student",
  "StudentDetails": "Student details",
  "StudentGroups": "Groups",
  "StudentRoles": "Roles",
  "Students": "Students",
  "SubmitAndClose": "Submit and close",
  "SuccessfullyDeleted": "Successfully deleted",
  "SuccessfullyRegistered": "Successfully registered",
  "Surname": "Last name",
  "SymptomDate": "Date reported",
  "SymptomMoreDetails": "More details provided",
  "Symptoms": "Symptoms",
  "SymptomsWithAlerts": "Symptom alerts",
  "SymptomsWithoutAlerts": "Other occassions symptoms were reported",
  "TenancyName": "School Code",
  "TenantDeleteWarningMessage": "School {0} will be deleted.",
  "TenantIdIsNotActive{0}": "SchoolId {0} is not active",
  "TenantIsNotActive": "School {0} is not active.",
  "TenantName_Regex_Description": "School name must be at least 2 chars, starts with a letter and continue with letter, number, dash or underscore.",
  "TenantNameCanNotBeEmpty": "School name can not be empty",
  "Tenants": "Schools",
  "TenantSelection": "School Selection",
  "TenantSelection_Detail": "Please select one of the following schools.",
  "ThereIsNoTenantDefinedWithName{0}": "There is no school defined with name {0}",
  "ThisFieldIsRequired": "This field is required",
  "Timers": "Timers",
  "UniqueCode": "Unique code",
  "UnknownTenantId{0}": "Unknown schoolId {0}",
  "UpdatePassword": "Update Password",
  "UserDeleteWarningMessage": "User {0} will be deleted.",
  "UserDetails": "User details",
  "UserEmailIsNotConfirmedAndCanNotLogin": "Your email address is not confirmed. You can not login.",
  "UserGroups": "Groups",
  "UserIsNotActiveAndCanNotLogin": "Student {0} is not active and can not log in.",
  "UserLockedOutMessage": "The user account has been locked out. Please try again later.",
  "UserName": "Username",
  "UserNameOrEmail": "Username or Email",
  "UserRoles": "Roles",
  "Users": "People",
  "Version": "Version",
  "WaitingForActivationMessage": "Your account is waiting to be activated by system admin.",
  "WaitingForEmailActivation": "Your email address should be activated",
  "WelcomeMessage": "Welcome to HealthyPlayerOne!",
  "WristOrHandPainNoneOrBoth": "If entered, both threshold and days must be completed for wrist or hand pain.",
  "Yes": "Yes"
};


})();

(function() {

    abp.features = abp.features || {};

    abp.features.allFeatures = {
    };

})();

(function(){

    abp.auth = abp.auth || {};

    abp.auth.allPermissions = {
        'Pages.Home': true,
        'Pages.Users': true,
        'Pages.Roles': true,
        'Pages.Tenants': true,
        'ClientDevice': true,
        'Administration': true,
        'Administration.UserManagement': true,
        'Administration.UserManagement.Modify': true,
        'Administration.UserManagement.Create': true,
        'Administration.UserManagement.Read': true,
        'Administration.GroupManagement': true,
        'Administration.GroupManagement.Modify': true,
        'Administration.GroupManagement.Create': true,
        'Administration.StudentManagement': true,
        'Administration.StudentManagement.Modify': true,
        'Administration.StudentManagement.Create': true,
        'Administration.StudentManagement.Read': true,
        'Administration.FacultyManagement': true,
        'Administration.FacultyManagement.Modify': true,
        'Administration.FacultyManagement.Create': true,
        'Administration.FacultyManagement.Read': true,
        'Administration.DeviceManagement': true,
        'Administration.DeviceManagement.Modify': true,
        'Administration.GameSessionManagement': true,
        'Administration.IncidentManagement': true
    };

    abp.auth.grantedPermissions = {
    };

})();

(function() {
    abp.nav = {};
    abp.nav.menus = {
        'MainMenu': {
            name: 'MainMenu',
            displayName: 'Main menu',
            items: []
            }
    };
})();


(function(){
    abp.setting = abp.setting || {};
    abp.setting.values = {

        'Abp.Localization.DefaultLanguageName': 'en',
        'Abp.Notifications.ReceiveNotifications': 'true',
        'Abp.Timing.TimeZone': 'UTC',
        'Abp.Zero.UserManagement.IsEmailConfirmationRequiredForLogin': 'false',
        'Abp.Zero.OrganizationUnits.MaxUserMembershipCount': '2147483647',
        'Abp.Zero.UserManagement.TwoFactorLogin.IsEnabled': 'true',
        'Abp.Zero.UserManagement.TwoFactorLogin.IsRememberBrowserEnabled': 'true',
        'Abp.Zero.UserManagement.TwoFactorLogin.IsEmailProviderEnabled': 'true',
        'Abp.Zero.UserManagement.TwoFactorLogin.IsSmsProviderEnabled': 'true',
        'Abp.Zero.UserManagement.UserLockOut.IsEnabled': 'true',
        'Abp.Zero.UserManagement.UserLockOut.MaxFailedAccessAttemptsBeforeLockout': '5',
        'Abp.Zero.UserManagement.UserLockOut.DefaultAccountLockoutSeconds': '300',
        'Abp.Zero.UserManagement.PasswordComplexity.RequireDigit': 'false',
        'Abp.Zero.UserManagement.PasswordComplexity.RequireLowercase': 'false',
        'Abp.Zero.UserManagement.PasswordComplexity.RequireNonAlphanumeric': 'false',
        'Abp.Zero.UserManagement.PasswordComplexity.RequireUppercase': 'false',
        'Abp.Zero.UserManagement.PasswordComplexity.RequiredLength': '3',
        'App.UiTheme': 'red'
    };

})();

(function(){
    abp.clock.provider = abp.timing.unspecifiedClockProvider || abp.timing.localClockProvider;
    abp.clock.provider.supportsMultipleTimezone = false;
})();

(function(abp){

    abp.custom = {}

})(abp);

(function(){
    abp.event.trigger('abp.dynamicScriptsInitialized');
})();
