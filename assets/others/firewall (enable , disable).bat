@echo off
setlocal enabledelayedexpansion
color 0A

:menu
cls
echo.
echo Select the action for the firewall rule:
echo 1. Block Outbound
echo 2. Block Inbound
echo 3. Block Both Outbound and Inbound
echo 4. Enable Outbound
echo 5. Enable Inbound
echo 6. Enable Both Outbound and Inbound
set /p choice="Enter your choice (1, 2, 3, 4, 5, or 6): "

set /p programPath="Enter the full path of the program (or leave blank to apply to all programs): "
set /p ruleName="Enter the name of the rule: "

:: Remove any quotation marks from the programPath
set programPath=%programPath:"=%

if "!choice!"=="1" (
    set direction=out
    set action=block
    goto delete
) else if "!choice!"=="2" (
    set direction=in
    set action=block
    goto delete
) else if "!choice!"=="3" (
    set action=block
    goto deleteBoth
) else if "!choice!"=="4" (
    set direction=out
    set action=allow
    goto delete
) else if "!choice!"=="5" (
    set direction=in
    set action=allow
    goto delete
) else if "!choice!"=="6" (
    set action=allow
    goto deleteBoth
) else (
    echo Invalid choice, please try again.
    goto menu
)

:delete
echo.
if "!programPath!"=="" (
    set program="%"
) else (
    set program="!programPath!"
)
echo Deleting existing rules for !direction! connections for program !program!...
netsh advfirewall firewall delete rule name=all program=!program! dir=!direction!
goto rule

:deleteBoth
echo.
if "!programPath!"=="" (
    set program="%"
) else (
    set program="!programPath!"
)
echo Deleting existing rules for both inbound and outbound connections for program !program!...
netsh advfirewall firewall delete rule name=all program=!program! dir=out
netsh advfirewall firewall delete rule name=all program=!program! dir=in
goto both

:rule
echo.
echo Adding firewall rule to !action! !direction! connections for program !program!...
netsh advfirewall firewall add rule name="!ruleName!" dir=!direction! action=!action! program=!program! profile=any enable=yes
echo Done.
goto continue

:both
echo.
echo Adding firewall rules to !action! both inbound and outbound connections for program !program!...
netsh advfirewall firewall add rule name="!ruleName! (Outbound)" dir=out action=!action! program=!program! profile=any enable=yes
netsh advfirewall firewall add rule name="!ruleName! (Inbound)" dir=in action=!action! program=!program! profile=any enable=yes
echo Done.
goto continue

:continue
echo.
set /p another="Do you want to add another program? (y/n): "
if /i "!another!"=="y" goto menu
if /i "!another!"=="n" goto end
echo Invalid choice, please try again.
goto continue

:end
echo Exiting...
pause
