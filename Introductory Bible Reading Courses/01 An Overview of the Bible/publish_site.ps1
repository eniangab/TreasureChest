Connect-AzAccount
$storageAccount = Get-AzStorageAccount -ResourceGroupName "AkbtRG" -Name "akbtstatichost"

$ctx = $storageAccount.Context
$url = Write-Output $storageAccount.PrimaryEndpoints.Web
Write-Output $storageAccount.PrimaryEndpoints.Web
Enable-AzStorageStaticWebsite -Context $ctx -IndexDocument summary.html -ErrorDocument404Path 404.html

#set-AzStorageblobcontent  -File "\\Win10ProVM\CLOUD\Treasure Chest\Spurgeon's Daily Devotional\01 An Overview of the Bible\summary.html" ` -Container `$web ` -Blob "summary.html" ` -Context $ctx
set-AzStorageblobcontent  -File "C:\Users\enian\Desktop\TEMP\CLOUD\Treasure Chest\Spurgeon's Daily Devotional\01 An Overview of the Bible\summary.html" ` -Container `$web ` -Blob "summary.html" ` -Context $ctx


Start-Process -FilePath $url
pause