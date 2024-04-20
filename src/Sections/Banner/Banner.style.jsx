import styled from "styled-components";

const BannerStyle = styled.div`
overflow: hidden;
position: relative;
    .home-banner-shape{
        position: absolute;
        top: 20px;
        left: 0px;
        width: 100%;
        z-index: 0;
        .ractangle{
            width: 100%;
            height: 60px;
            margin-bottom: 20px;
            &:nth-child(1){
                background: linear-gradient(90deg, rgba(254, 185, 8, 0.20) 0%, rgba(108, 211, 108, 0.20) 100%);
            }
            &:nth-child(2){
                background: linear-gradient(90deg, rgba(254, 185, 8, 0.20) 0%, rgba(108, 211, 108, 0.20) 100%);
            }
            &:nth-child(3){
                background: linear-gradient(90deg, rgba(254, 185, 8, 0.15) 0%, rgba(108, 211, 108, 0.15) 100%);
            }
            &:nth-child(4){
                background: linear-gradient(90deg, rgba(254, 185, 8, 0.11) 0%, rgba(108, 211, 108, 0.11) 100%);
            }
            &:nth-child(5){
                background: linear-gradient(90deg, rgba(254, 185, 8, 0.09) 0%, rgba(108, 211, 108, 0.09) 100%);
            }
            &:nth-child(6){
                background: linear-gradient(90deg, rgba(254, 185, 8, 0.07) 0%, rgba(108, 211, 108, 0.07) 100%);
            }
            &:nth-child(7){
                background: linear-gradient(90deg, rgba(254, 185, 8, 0.05) 0%, rgba(108, 211, 108, 0.05) 100%);
            }
            &:nth-child(8){
                background: linear-gradient(90deg, rgba(254, 185, 8, 0.03) 0%, rgba(108, 211, 108, 0.03) 100%);
            }
        }
    }
.home-banner-inner {
    background: url(../assets/images/crypto-token/crypto-token-bg.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    position: relative;
    overflow: hidden;

    .overlay {
        /* background: url(../assets/images/crypto-token/grain-texture.png);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover; */
        height: 100%;
        padding-top: 200px;
        padding-bottom: 91px;
        height: 100%;
        .container{
            position: relative;
        }
        .masd-grad{
            position: absolute;
            right: -158px;
            top: -100px;
        }
    }
    .bottom-overlay{
        height: 50%;
        width: 100%;
        bottom: 0px;
        position: absolute;
        background: linear-gradient(180deg, rgba(13, 16, 20, 0.00) 0%, rgba(13, 16, 20, 0.76) 33%, #0D1014 85.42%);
    }
}

.home-banner-text{
    margin-bottom: 120px;
    position: relative;
    z-index: 1;
    max-width: 800px;
    width: 100%;
    h1{
        font-size: 80px;
        line-height: 125%;
        color: #ffffff;
        margin-bottom: 45px;
        text-transform: uppercase;
    }
    p{
        font-size: 16px;
        line-height: 187%;
        color: #ffffff;
        max-width: 677px;
        margin-bottom: 58px;
    }
}

.banner-img{
    position: absolute;
    right: -14%;
    top: -32%;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1000px;
    .coin-img{
        position: absolute;
        transform: translateX(-30px) translateY(15px);
        max-width: 220px;
    }
}


/*-- crypto banner card --*/
.home-banner-card-section{
    position: relative;
    z-index: 1;    
}
.banner-card{
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(5px);
    border-radius: 20px;
    padding: 25px 40px;
    h2{
        font-size: 40px;
        max-height: 70px;
        min-height: 70px;
        padding: 5px 0px;
        line-height: 140%;
        color: #ffffff;
        margin-bottom: 0px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 15px 0px;
    }
    p{
        font-size: 18px;
        line-height: 100px;
        text-transform: uppercase;
        color: #ffffff;
        margin-bottom: 0px;
        position: relative;
        width: max-content;
    }
}

.banner-card2{
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(5px);
    border-radius: 20px;
    padding: 25px 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    h2{
        font-size: 40px;
        line-height: 60px;
        color: #ffffff;
        margin-bottom: 0px;
    }
    p{
        font-size: 18px;
        text-transform: uppercase;
        color: #ffffff;;
        margin-bottom: 0px;
        line-height: 60px;
        position: relative;
        width: max-content;
    }
}

.number-diy{
    display: flex;
    .data{
        font-size: 40px !important;
        line-height: auto;
        color: #ffffff !important;
        margin-bottom: 0px;
        div{
            width: 30px !important;
            padding: 0px !important;
            span{
                width: 30px !important;
                padding: 0px !important;
                height: auto !important;
            }
        }
    }
}
/*-- banner-video-section start --*/

@-webkit-keyframes circle {
    from {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
    
    to {
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
        opacity: 0;
    }
}

@keyframes circle {
    from {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
    
    to {
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
        opacity: 0;
    }
}

.banner-bg-animetion{
    .page-bg,
.animation-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.particle,
.particle:after {
  background: transparent;
}

.particle:after {
  position: absolute;
  content: "";
  top: 2560px;
}

.particle-1 {
  animation: animParticle 60s linear infinite;
  box-shadow: 0px 0px #fff, 1963px 857px #fff, 1743px 1760px #fff, 1436px 154px #fff, 1011px 1778px #fff, 1734px 305px #fff, 1753px 2434px #fff, 1736px 1974px #fff, 1046px 2360px #fff, 1412px 1158px #fff, 359px 987px #fff, 1523px 68px #fff, 2104px 2393px #fff, 1310px 420px #fff, 100px 2082px #fff, 1677px 2308px #fff, 509px 2060px #fff, 1411px 1782px #fff, 1013px 1796px #fff, 1927px 87px #fff, 267px 809px #fff, 390px 45px #fff, 2130px 1600px #fff, 2339px 842px #fff, 305px 1999px #fff, 600px 2128px #fff, 2487px 344px #fff, 675px 205px #fff, 1946px 2098px #fff, 1371px 697px #fff, 1017px 1612px #fff, 2109px 1456px #fff, 2030px 1222px #fff, 1954px 850px #fff, 794px 708px #fff, 1915px 1501px #fff, 2392px 741px #fff, 2543px 359px #fff, 1584px 931px #fff, 158px 271px #fff, 361px 270px #fff, 1431px 787px #fff, 1322px 151px #fff, 107px 119px #fff, 2375px 2555px #fff, 385px 1335px #fff, 815px 1205px #fff, 1019px 821px #fff, 577px 1957px #fff, 327px 264px #fff, 1748px 1348px #fff, 490px 2394px #fff, 2080px 1773px #fff, 649px 2429px #fff, 193px 1898px #fff, 478px 2358px #fff, 1553px 1249px #fff, 1780px 2219px #fff, 1054px 945px #fff, 849px 1488px #fff, 1227px 1729px #fff, 2060px 2508px #fff, 1765px 1983px #fff, 1709px 2396px #fff, 2064px 468px #fff, 1697px 276px #fff, 2161px 1615px #fff, 937px 874px #fff, 1523px 1237px #fff, 1271px 599px #fff, 1777px 2335px #fff, 2067px 2291px #fff, 2343px 1386px #fff, 2143px 253px #fff, 1912px 2080px #fff, 994px 26px #fff, 408px 2176px #fff, 1495px 1802px #fff, 2427px 559px #fff, 2124px 226px #fff, 1703px 1690px #fff, 648px 1601px #fff, 944px 622px #fff, 1530px 1465px #fff, 605px 2075px #fff, 1839px 15px #fff, 2422px 89px #fff, 721px 140px #fff, 2086px 2341px #fff, 1565px 918px #fff, 1014px 1897px #fff, 1435px 1965px #fff, 957px 1650px #fff, 70px 221px #fff, 2403px 1310px #fff, 1086px 679px #fff, 2061px 224px #fff, 855px 1391px #fff, 1308px 1380px #fff, 1263px 848px #fff, 1797px 1100px #fff, 1466px 1846px #fff, 692px 1817px #fff, 2499px 1995px #fff, 460px 227px #fff, 1806px 2448px #fff, 234px 1468px #fff, 2024px 654px #fff, 2216px 676px #fff, 1403px 2128px #fff, 1979px 1744px #fff, 992px 2279px #fff, 2377px 917px #fff, 381px 1399px #fff, 1696px 1562px #fff, 1606px 489px #fff, 2427px 2176px #fff, 1434px 2303px #fff, 110px 946px #fff, 1661px 838px #fff, 1672px 2042px #fff, 1460px 914px #fff, 1558px 308px #fff, 2435px 1512px #fff, 1528px 391px #fff, 2242px 1780px #fff, 1032px 21px #fff, 594px 2205px #fff, 1485px 509px #fff, 2450px 1749px #fff, 1072px 2362px #fff, 400px 765px #fff, 798px 1332px #fff, 1455px 1806px #fff, 782px 1853px #fff, 1516px 563px #fff, 1030px 2425px #fff, 1466px 307px #fff, 505px 704px #fff, 2220px 1009px #fff, 2464px 50px #fff, 1146px 1881px #fff, 851px 2054px #fff, 1925px 2511px #fff, 2101px 523px #fff, 625px 236px #fff, 1813px 948px #fff, 363px 1712px #fff, 2086px 780px #fff, 2282px 1655px #fff, 2420px 2147px #fff, 350px 1690px #fff, 53px 448px #fff, 485px 743px #fff, 1034px 1556px #fff, 2086px 2262px #fff, 1848px 147px #fff, 618px 1511px #fff, 1602px 1551px #fff, 762px 1989px #fff, 1261px 1352px #fff, 1196px 1009px #fff, 1809px 1441px #fff, 1385px 159px #fff, 1416px 1594px #fff, 1776px 320px #fff, 2482px 2134px #fff, 1957px 862px #fff, 913px 1689px #fff, 532px 116px #fff, 1536px 1868px #fff, 2279px 267px #fff, 2329px 916px #fff, 1592px 1126px #fff, 141px 1308px #fff, 1977px 344px #fff, 916px 1814px #fff, 2220px 2142px #fff, 1312px 590px #fff, 2489px 1797px #fff, 889px 1369px #fff, 2481px 2488px #fff, 725px 2272px #fff, 1317px 1902px #fff, 973px 1779px #fff, 2217px 1988px #fff, 1885px 193px #fff, 1654px 2518px #fff, 2411px 1486px #fff, 49px 123px #fff, 2409px 986px #fff, 1874px 557px #fff, 252px 1306px #fff, 647px 1545px #fff, 1911px 27px #fff, 1723px 1400px #fff, 2496px 968px #fff, 1591px 1662px #fff, 1500px 2458px #fff, 2188px 852px #fff, 1719px 1764px #fff, 1375px 777px #fff, 1164px 1277px #fff, 156px 1511px #fff, 2208px 1164px #fff, 1681px 638px #fff, 581px 881px #fff, 448px 264px #fff, 261px 412px #fff, 1268px 2102px #fff, 2198px 8px #fff, 1520px 1052px #fff, 266px 648px #fff, 1430px 1882px #fff, 1174px 2117px #fff, 1043px 685px #fff, 651px 2384px #fff, 1545px 58px #fff, 2058px 1305px #fff, 1273px 1064px #fff, 794px 2486px #fff, 2555px 2381px #fff, 1814px 1092px #fff, 2316px 1789px #fff, 2426px 1275px #fff, 1730px 2103px #fff, 2050px 174px #fff, 2248px 1147px #fff, 1860px 548px #fff, 2385px 608px #fff, 219px 419px #fff, 279px 1960px #fff, 2113px 13px #fff, 756px 343px #fff, 2537px 814px #fff, 1460px 1330px #fff, 79px 89px #fff, 114px 839px #fff, 388px 1629px #fff, 1460px 1789px #fff, 2470px 1999px #fff, 1465px 983px #fff, 1709px 777px #fff, 364px 407px #fff, 2324px 1594px #fff, 238px 1233px #fff, 1344px 2162px #fff, 2389px 910px #fff, 150px 1386px #fff, 214px 1816px #fff, 1428px 162px #fff, 1971px 125px #fff, 2498px 1850px #fff, 1092px 1050px #fff, 1657px 704px #fff, 1740px 2088px #fff, 842px 2020px #fff, 1230px 2175px #fff, 217px 412px #fff, 1265px 1612px #fff, 1747px 2340px #fff, 1408px 1803px #fff, 973px 1469px #fff, 1479px 263px #fff, 2080px 1428px #fff, 2232px 872px #fff, 1427px 1862px #fff, 467px 2014px #fff, 2104px 136px #fff, 1623px 1891px #fff, 2507px 1000px #fff, 2261px 1667px #fff, 2503px 150px #fff, 615px 1886px #fff, 2052px 2334px #fff, 1795px 752px #fff, 1765px 1520px #fff, 2242px 2191px #fff, 1372px 1983px #fff, 589px 2494px #fff, 1940px 271px #fff, 2407px 1957px #fff, 1382px 2018px #fff, 2436px 1070px #fff, 1417px 787px #fff, 1369px 836px #fff, 2280px 820px #fff, 84px 2101px #fff, 645px 94px #fff, 1623px 2519px #fff, 1000px 1547px #fff, 27px 2429px #fff, 1806px 448px #fff, 1629px 485px #fff, 158px 1173px #fff, 1492px 607px #fff, 442px 2485px #fff, 355px 2366px #fff, 1098px 1947px #fff, 2113px 2127px #fff, 313px 1801px #fff, 2004px 1206px #fff, 1785px 802px #fff, 2159px 1588px #fff, 2319px 441px #fff, 157px 337px #fff, 230px 2547px #fff, 2456px 1088px #fff, 904px 2112px #fff, 428px 665px #fff, 437px 462px #fff, 418px 708px #fff, 1547px 413px #fff, 501px 373px #fff, 321px 1411px #fff, 562px 2548px #fff, 606px 2064px #fff, 2554px 1393px #fff, 2126px 1273px #fff, 1166px 1390px #fff, 2015px 1407px #fff, 2480px 2422px #fff, 463px 1723px #fff, 480px 588px #fff, 488px 2037px #fff, 1008px 53px #fff, 629px 2157px #fff, 379px 2441px #fff, 978px 2001px #fff, 2041px 154px #fff, 870px 413px #fff, 813px 802px #fff, 1217px 525px #fff, 662px 1103px #fff, 2245px 1433px #fff, 230px 2252px #fff, 565px 34px #fff, 1743px 430px #fff, 2195px 550px #fff, 543px 1276px #fff, 2078px 453px #fff, 918px 2298px #fff, 2258px 458px #fff, 110px 199px #fff, 156px 2055px #fff, 1028px 77px #fff, 1803px 2451px #fff, 841px 1488px #fff, 1203px 1273px #fff, 1583px 889px #fff, 1931px 802px #fff, 647px 2004px #fff, 1358px 398px #fff, 1857px 1557px #fff, 2156px 1218px #fff, 1258px 2500px #fff, 150px 1375px #fff, 206px 94px #fff, 1667px 2451px #fff, 1007px 1232px #fff, 102px 782px #fff, 1039px 914px #fff, 1626px 1268px #fff, 2270px 2463px #fff, 1083px 80px #fff, 1563px 66px #fff, 2271px 1789px #fff, 2396px 1619px #fff, 1600px 1257px #fff, 2004px 1323px #fff, 1054px 2515px #fff, 1269px 235px #fff, 2542px 1531px #fff, 2046px 273px #fff, 537px 1446px #fff, 48px 847px #fff, 379px 493px #fff, 729px 610px #fff, 2109px 1037px #fff, 1665px 2450px #fff, 1330px 1710px #fff, 2397px 254px #fff, 2191px 412px #fff, 25px 1635px #fff, 929px 407px #fff, 2361px 2405px #fff, 1955px 1730px #fff, 610px 1926px #fff, 183px 120px #fff, 2317px 2374px #fff, 123px 1329px #fff, 2028px 1822px #fff, 952px 1744px #fff, 2385px 1553px #fff, 1838px 674px #fff, 466px 2077px #fff, 1524px 270px #fff, 142px 1991px #fff, 844px 985px #fff, 1704px 570px #fff, 1972px 729px #fff, 2458px 1074px #fff, 1259px 2029px #fff, 2527px 1573px #fff, 2323px 1481px #fff, 466px 1786px #fff, 1523px 1770px #fff, 111px 1737px #fff, 1610px 46px #fff, 2494px 100px #fff, 2123px 1366px #fff, 181px 1492px #fff, 2247px 1658px #fff, 717px 1298px #fff, 639px 1237px #fff, 1826px 1970px #fff, 935px 2367px #fff, 224px 309px #fff, 867px 1729px #fff, 1363px 119px #fff, 1474px 344px #fff, 1794px 353px #fff, 150px 1255px #fff, 2406px 1224px #fff, 1075px 696px #fff, 1353px 1800px #fff, 1143px 1321px #fff, 1003px 800px #fff, 1686px 630px #fff, 1563px 1493px #fff, 1579px 971px #fff, 938px 412px #fff, 1708px 230px #fff, 1535px 241px #fff, 1605px 2285px #fff, 2389px 2528px #fff, 619px 255px #fff, 1203px 653px #fff, 2468px 1445px #fff, 2307px 1959px #fff, 541px 916px #fff, 1936px 987px #fff, 284px 2335px #fff, 1729px 2386px #fff, 121px 1851px #fff, 2030px 321px #fff, 1526px 927px #fff, 71px 1848px #fff, 445px 392px #fff, 5px 559px #fff, 528px 217px #fff, 290px 540px #fff, 1477px 1288px #fff, 1575px 824px #fff, 321px 2149px #fff, 1619px 533px #fff, 1985px 1180px #fff, 1492px 1438px #fff, 1807px 1432px #fff, 910px 1121px #fff, 2528px 192px #fff, 701px 874px #fff, 883px 1008px #fff, 1355px 690px #fff, 2298px 1485px #fff, 964px 2310px #fff, 1643px 641px #fff, 1292px 2528px #fff, 2501px 363px #fff, 1807px 1737px #fff, 2073px 598px #fff, 1781px 337px #fff, 1528px 1307px #fff, 841px 2385px #fff, 617px 410px #fff, 2001px 1616px #fff, 326px 2290px #fff, 2002px 149px #fff, 1271px 842px #fff, 1910px 2106px #fff, 252px 1148px #fff, 180px 225px #fff, 1637px 1970px #fff, 1335px 1461px #fff, 2154px 949px #fff, 2240px 405px #fff, 1036px 180px #fff, 1347px 494px #fff, 2075px 2073px #fff, 438px 1639px #fff, 1062px 1996px #fff, 340px 1694px #fff, 297px 2000px #fff, 2448px 1913px #fff, 2115px 1916px #fff, 1307px 743px #fff, 277px 226px #fff, 1019px 2374px #fff, 2076px 269px #fff, 1669px 1333px #fff, 1171px 242px #fff, 684px 1769px #fff, 2486px 2464px #fff, 198px 2325px #fff, 1444px 1561px #fff, 1472px 495px #fff, 1045px 1587px #fff, 1019px 1695px #fff, 160px 1558px #fff, 723px 1737px #fff, 953px 56px #fff, 1638px 1379px #fff, 1381px 1104px #fff, 1861px 1018px #fff, 1319px 1089px #fff, 2308px 313px #fff, 1315px 1918px #fff, 1117px 2444px #fff, 1532px 1567px #fff, 70px 987px #fff, 51px 1692px #fff, 2299px 1076px #fff, 371px 1348px #fff, 2533px 879px #fff, 746px 2324px #fff, 1068px 278px #fff, 2535px 1741px #fff, 1850px 2191px #fff, 483px 2117px #fff, 959px 52px #fff, 1591px 415px #fff, 397px 816px #fff, 2042px 223px #fff, 1292px 1357px #fff, 1129px 2321px #fff, 522px 2345px #fff, 3px 6px #fff, 1189px 815px #fff, 1168px 2470px #fff, 1829px 1398px #fff, 441px 2406px #fff, 1912px 2144px #fff, 1127px 2224px #fff, 170px 649px #fff, 112px 1774px #fff, 595px 702px #fff, 1222px 287px #fff, 6px 659px #fff, 1987px 185px #fff, 2151px 745px #fff, 319px 1018px #fff, 489px 2029px #fff, 334px 2171px #fff, 442px 2486px #fff, 959px 1463px #fff, 1034px 1840px #fff, 224px 2304px #fff, 1928px 2005px #fff, 907px 1864px #fff, 2192px 1025px #fff, 677px 1192px #fff, 883px 839px #fff, 1889px 2086px #fff, 33px 2361px #fff, 828px 795px #fff, 943px 844px #fff, 534px 861px #fff, 1073px 409px #fff, 717px 2426px #fff, 2482px 1892px #fff, 1059px 543px #fff, 2433px 252px #fff, 614px 863px #fff, 1769px 362px #fff, 2064px 1437px #fff, 1655px 501px #fff, 1978px 2135px #fff, 1972px 1089px #fff, 371px 17px #fff, 266px 1275px #fff, 391px 1582px #fff, 2303px 2364px #fff, 561px 734px #fff, 2347px 1116px #fff, 6px 2234px #fff, 1304px 1533px #fff, 2261px 1512px #fff, 545px 1556px #fff, 1809px 1955px #fff, 321px 1247px #fff, 474px 2078px #fff, 622px 1231px #fff, 140px 1576px #fff, 405px 298px #fff, 2242px 2206px #fff, 1431px 892px #fff, 202px 1999px #fff, 1777px 1866px #fff, 380px 666px #fff, 1461px 1450px #fff, 11px 1445px #fff;
  height: 1px;
  width: 1px;
}

.particle-1:after {
  box-shadow: 0px 0px #fff, 1105px 561px #fff, 1620px 238px #fff, 2156px 2310px #fff, 1240px 2072px #fff, 117px 1407px #fff, 1921px 1633px #fff, 2379px 475px #fff, 2380px 2158px #fff, 703px 425px #fff, 1741px 1664px #fff, 658px 1654px #fff, 239px 567px #fff, 476px 2317px #fff, 1199px 1092px #fff, 1546px 2115px #fff, 1471px 1511px #fff, 1246px 2102px #fff, 450px 535px #fff, 545px 2552px #fff, 1261px 1510px #fff, 1286px 151px #fff, 1668px 452px #fff, 719px 2151px #fff, 2211px 1459px #fff, 2148px 1600px #fff, 628px 2496px #fff, 918px 1639px #fff, 889px 2071px #fff, 1648px 171px #fff, 2467px 556px #fff, 1689px 772px #fff, 2098px 1600px #fff, 556px 2043px #fff, 2340px 930px #fff, 428px 1746px #fff, 941px 1054px #fff, 1248px 1504px #fff, 1740px 1780px #fff, 89px 1914px #fff, 1167px 230px #fff, 1311px 1671px #fff, 558px 1405px #fff, 2060px 1450px #fff, 1133px 1294px #fff, 260px 1234px #fff, 677px 1944px #fff, 972px 2117px #fff, 1925px 82px #fff, 2336px 2394px #fff, 150px 1868px #fff, 672px 125px #fff, 1370px 477px #fff, 2287px 2161px #fff, 2058px 2474px #fff, 1752px 1396px #fff, 2357px 1789px #fff, 42px 771px #fff, 248px 120px #fff, 1052px 121px #fff, 67px 393px #fff, 311px 1907px #fff, 2304px 20px #fff, 1319px 1042px #fff, 672px 1505px #fff, 1542px 1365px #fff, 1182px 1656px #fff, 750px 222px #fff, 1940px 1076px #fff, 1569px 1850px #fff, 2022px 603px #fff, 288px 913px #fff, 667px 1208px #fff, 78px 1261px #fff, 2202px 179px #fff, 1511px 992px #fff, 2118px 526px #fff, 602px 2340px #fff, 2499px 866px #fff, 2431px 1346px #fff, 634px 2549px #fff, 1382px 2316px #fff, 763px 545px #fff, 2385px 1653px #fff, 569px 2479px #fff, 2196px 484px #fff, 376px 1150px #fff, 1302px 189px #fff, 1716px 2360px #fff, 1223px 1926px #fff, 1949px 2173px #fff, 2212px 2113px #fff, 2412px 189px #fff, 730px 1907px #fff, 493px 535px #fff, 1878px 1914px #fff, 1012px 123px #fff, 333px 2055px #fff, 311px 358px #fff, 2105px 1227px #fff, 1855px 829px #fff, 665px 371px #fff, 63px 511px #fff, 494px 1321px #fff, 734px 532px #fff, 1752px 735px #fff, 2184px 461px #fff, 1089px 1026px #fff, 12px 1565px #fff, 2047px 73px #fff, 981px 1224px #fff, 987px 2065px #fff, 1414px 1491px #fff, 65px 1277px #fff, 963px 908px #fff, 398px 1317px #fff, 2330px 123px #fff, 1160px 1673px #fff, 1505px 140px #fff, 658px 1624px #fff, 2528px 130px #fff, 1754px 609px #fff, 317px 2192px #fff, 286px 1711px #fff, 1879px 1752px #fff, 1817px 488px #fff, 1441px 1923px #fff, 781px 122px #fff, 1457px 1378px #fff, 939px 2398px #fff, 1784px 1005px #fff, 626px 628px #fff, 483px 2409px #fff, 780px 1740px #fff, 1031px 2282px #fff, 1288px 1480px #fff, 1121px 716px #fff, 2526px 1856px #fff, 1308px 2241px #fff, 1952px 1026px #fff, 2029px 883px #fff, 1687px 4px #fff, 2243px 2190px #fff, 1283px 1265px #fff, 1292px 282px #fff, 1956px 1319px #fff, 2186px 1177px #fff, 1008px 249px #fff, 160px 746px #fff, 1615px 1337px #fff, 132px 714px #fff, 582px 630px #fff, 125px 460px #fff, 290px 200px #fff, 838px 1399px #fff, 278px 1906px #fff, 2081px 268px #fff, 1480px 2037px #fff, 358px 1947px #fff, 1773px 1100px #fff, 2084px 1566px #fff, 283px 1595px #fff, 2409px 1497px #fff, 2117px 2539px #fff, 1605px 1337px #fff, 950px 735px #fff, 1113px 1465px #fff, 659px 1912px #fff, 1138px 389px #fff, 1172px 183px #fff, 2198px 1210px #fff, 263px 2165px #fff, 2200px 146px #fff, 1476px 1592px #fff, 554px 1971px #fff, 829px 1018px #fff, 518px 1774px #fff, 2415px 1095px #fff, 2079px 1346px #fff, 1233px 1514px #fff, 1940px 2544px #fff, 1028px 417px #fff, 2541px 2187px #fff, 687px 45px #fff, 757px 362px #fff, 1534px 2530px #fff, 105px 1546px #fff, 685px 449px #fff, 1469px 784px #fff, 1175px 1950px #fff, 1884px 1261px #fff, 1561px 1962px #fff, 1895px 881px #fff, 1952px 773px #fff, 431px 910px #fff, 1465px 710px #fff, 755px 2210px #fff, 493px 1375px #fff, 2128px 746px #fff, 615px 808px #fff, 2533px 1082px #fff, 317px 842px #fff, 705px 435px #fff, 1445px 1268px #fff, 1228px 1096px #fff, 2084px 696px #fff, 2461px 1519px #fff, 1263px 1961px #fff, 2294px 2077px #fff, 455px 1988px #fff, 225px 767px #fff, 1071px 960px #fff, 1788px 2013px #fff, 1182px 1477px #fff, 1451px 656px #fff, 426px 579px #fff, 1986px 2363px #fff, 2107px 1040px #fff, 1980px 2452px #fff, 636px 2175px #fff, 1975px 1979px #fff, 1000px 582px #fff, 915px 1636px #fff, 721px 280px #fff, 734px 564px #fff, 779px 269px #fff, 1761px 212px #fff, 13px 1969px #fff, 750px 2455px #fff, 509px 1238px #fff, 2323px 2283px #fff, 2339px 2518px #fff, 1144px 2193px #fff, 215px 202px #fff, 565px 1469px #fff, 1598px 1374px #fff, 2144px 123px #fff, 843px 1988px #fff, 1067px 356px #fff, 1978px 245px #fff, 2257px 2123px #fff, 853px 2299px #fff, 680px 624px #fff, 1923px 505px #fff, 1667px 2181px #fff, 1036px 2045px #fff, 999px 969px #fff, 1682px 1432px #fff, 329px 1409px #fff, 1639px 641px #fff, 2192px 2399px #fff, 839px 638px #fff, 1253px 1894px #fff, 1651px 2339px #fff, 1397px 611px #fff, 2015px 953px #fff, 407px 849px #fff, 2261px 754px #fff, 824px 1274px #fff, 2290px 2232px #fff, 1925px 1670px #fff, 48px 473px #fff, 1878px 591px #fff, 348px 1613px #fff, 1383px 649px #fff, 980px 752px #fff, 1927px 416px #fff, 292px 461px #fff, 1552px 757px #fff, 802px 460px #fff, 2526px 520px #fff, 482px 1209px #fff, 2253px 1315px #fff, 821px 262px #fff, 2320px 929px #fff, 1181px 1183px #fff, 1832px 174px #fff, 2291px 1543px #fff, 1670px 1733px #fff, 1171px 88px #fff, 1191px 2035px #fff, 2388px 996px #fff, 1254px 100px #fff, 1202px 1969px #fff, 1434px 637px #fff, 24px 240px #fff, 1713px 751px #fff, 703px 115px #fff, 2505px 2138px #fff, 505px 528px #fff, 2396px 449px #fff, 2171px 8px #fff, 2px 1797px #fff, 753px 1731px #fff, 854px 2012px #fff, 677px 1917px #fff, 621px 2203px #fff, 2385px 1886px #fff, 1919px 30px #fff, 2465px 922px #fff, 2481px 2529px #fff, 2020px 2475px #fff, 1855px 1302px #fff, 2104px 1653px #fff, 1873px 776px #fff, 91px 832px #fff, 1588px 68px #fff, 224px 1783px #fff, 2448px 1447px #fff, 29px 2548px #fff, 1687px 1321px #fff, 411px 431px #fff, 802px 413px #fff, 196px 1445px #fff, 160px 1167px #fff, 565px 1269px #fff, 139px 2461px #fff, 1880px 633px #fff, 1948px 951px #fff, 426px 1199px #fff, 1579px 29px #fff, 1847px 1868px #fff, 2516px 539px #fff, 609px 615px #fff, 1075px 279px #fff, 869px 1064px #fff, 286px 2363px #fff, 1183px 1828px #fff, 2297px 1983px #fff, 435px 2105px #fff, 1462px 693px #fff, 1406px 1553px #fff, 2319px 1757px #fff, 960px 2434px #fff, 1939px 1084px #fff, 1389px 1935px #fff, 646px 444px #fff, 2018px 1188px #fff, 2303px 172px #fff, 2381px 694px #fff, 2460px 535px #fff, 1681px 1252px #fff, 1905px 944px #fff, 837px 525px #fff, 1054px 1498px #fff, 916px 1534px #fff, 877px 445px #fff, 2225px 2180px #fff, 1652px 673px #fff, 1877px 1843px #fff, 1730px 511px #fff, 1293px 2174px #fff, 1290px 2079px #fff, 1730px 160px #fff, 1365px 571px #fff, 1586px 1945px #fff, 2290px 2014px #fff, 169px 774px #fff, 1635px 151px #fff, 752px 2458px #fff, 1376px 760px #fff, 1717px 598px #fff, 574px 630px #fff, 1754px 1491px #fff, 36px 2055px #fff, 1824px 2268px #fff, 2018px 1123px #fff, 2134px 1092px #fff, 532px 1474px #fff, 73px 1035px #fff, 301px 211px #fff, 391px 856px #fff, 443px 1797px #fff, 2142px 1858px #fff, 2185px 142px #fff, 2444px 487px #fff, 895px 1208px #fff, 1385px 1268px #fff, 2401px 243px #fff, 2021px 583px #fff, 2525px 2452px #fff, 1244px 486px #fff, 230px 1298px #fff, 2480px 1571px #fff, 1569px 322px #fff, 1317px 210px #fff, 1699px 2174px #fff, 2302px 937px #fff, 1427px 726px #fff, 403px 1696px #fff, 155px 2248px #fff, 2041px 2476px #fff, 76px 1144px #fff, 2249px 540px #fff, 1470px 943px #fff, 2264px 82px #fff, 2209px 100px #fff, 509px 931px #fff, 1256px 1266px #fff, 1954px 2292px #fff, 477px 777px #fff, 580px 2129px #fff, 1984px 1671px #fff, 887px 1186px #fff, 1802px 70px #fff, 2507px 2081px #fff, 523px 1465px #fff, 1545px 2108px #fff, 813px 1459px #fff, 1559px 1446px #fff, 2176px 104px #fff, 2014px 661px #fff, 1430px 2130px #fff, 2219px 1674px #fff, 768px 105px #fff, 981px 994px #fff, 782px 199px #fff, 841px 1052px #fff, 448px 1589px #fff, 651px 910px #fff, 2px 231px #fff, 1006px 100px #fff, 1556px 1154px #fff, 1197px 971px #fff, 272px 1214px #fff, 1364px 1911px #fff, 627px 2034px #fff, 1033px 1251px #fff, 967px 1025px #fff, 1151px 1193px #fff, 431px 832px #fff, 1165px 2214px #fff, 479px 1707px #fff, 2256px 1349px #fff, 608px 200px #fff, 204px 895px #fff, 1882px 822px #fff, 122px 2240px #fff, 2030px 2438px #fff, 1560px 296px #fff, 180px 1141px #fff, 2150px 946px #fff, 1018px 1491px #fff, 2451px 38px #fff, 2514px 1773px #fff, 518px 2409px #fff, 2517px 2060px #fff, 1560px 2074px #fff, 1735px 1261px #fff, 77px 1934px #fff, 1122px 1734px #fff, 2148px 2344px #fff, 1973px 1416px #fff, 2054px 1195px #fff, 2511px 1232px #fff, 1409px 705px #fff, 1931px 2555px #fff, 1121px 207px #fff, 1790px 1110px #fff, 162px 1338px #fff, 2513px 2113px #fff, 1395px 2058px #fff, 487px 1566px #fff, 661px 1099px #fff, 2494px 1573px #fff, 866px 902px #fff, 2518px 119px #fff, 2556px 2030px #fff, 2487px 2417px #fff, 2235px 1689px #fff, 2114px 874px #fff, 2152px 1125px #fff, 1874px 2032px #fff, 1997px 1954px #fff, 294px 2218px #fff, 1189px 1220px #fff, 1342px 121px #fff, 1881px 2559px #fff, 1325px 1273px #fff, 356px 579px #fff, 888px 977px #fff, 2169px 2506px #fff, 699px 2245px #fff, 1149px 979px #fff, 1918px 1189px #fff, 440px 1880px #fff, 1834px 1987px #fff, 2434px 2292px #fff, 1402px 1490px #fff, 393px 2160px #fff, 264px 2493px #fff, 785px 1752px #fff, 910px 2398px #fff, 1416px 963px #fff, 1515px 187px #fff, 1708px 1968px #fff, 47px 1082px #fff, 1433px 2224px #fff, 1236px 1543px #fff, 1653px 1892px #fff, 2372px 1427px #fff, 2438px 1665px #fff, 2430px 793px #fff, 173px 564px #fff, 1108px 1762px #fff, 1672px 204px #fff, 1681px 1452px #fff, 1948px 2241px #fff, 91px 206px #fff, 1818px 519px #fff, 542px 1810px #fff, 2269px 395px #fff, 317px 2175px #fff, 762px 295px #fff, 1946px 166px #fff, 2056px 2307px #fff, 2494px 313px #fff, 2177px 2132px #fff, 518px 1964px #fff, 1135px 2370px #fff, 2038px 891px #fff, 1465px 1907px #fff, 325px 104px #fff, 1732px 623px #fff, 739px 1303px #fff, 1498px 1681px #fff, 2363px 1760px #fff, 867px 1266px #fff, 1916px 1088px #fff, 374px 879px #fff, 1268px 2004px #fff, 296px 381px #fff, 1123px 1088px #fff, 2065px 40px #fff, 313px 2458px #fff, 2357px 900px #fff, 2028px 929px #fff, 2271px 2404px #fff, 2347px 476px #fff, 284px 465px #fff, 1376px 646px #fff, 1044px 1152px #fff, 783px 1386px #fff, 1712px 847px #fff, 1474px 1024px #fff, 1779px 988px #fff, 1269px 633px #fff, 1172px 1530px #fff, 2469px 2475px #fff, 696px 1000px #fff, 1415px 1249px #fff, 1507px 1602px #fff, 1018px 1484px #fff, 561px 578px #fff, 2319px 1625px #fff, 1218px 1215px #fff, 1706px 1309px #fff, 1415px 1060px #fff, 1485px 1731px #fff, 722px 970px #fff, 1998px 651px #fff, 1315px 49px #fff, 1145px 1143px #fff, 1803px 2290px #fff, 2035px 1706px #fff, 1412px 1882px #fff, 353px 62px #fff, 831px 1047px #fff, 937px 2018px #fff, 1140px 1068px #fff, 481px 1312px #fff, 267px 1511px #fff, 1181px 1970px #fff, 2331px 1809px #fff, 1101px 1563px #fff, 2288px 964px #fff, 1754px 763px #fff, 186px 1431px #fff, 1200px 1179px #fff, 403px 1363px #fff, 103px 761px #fff, 703px 378px #fff, 1089px 1679px #fff, 1611px 2148px #fff, 141px 419px #fff, 211px 238px #fff, 498px 1580px #fff, 1753px 2388px #fff, 2196px 47px #fff, 1368px 2388px #fff, 931px 1683px #fff, 1377px 401px #fff, 1036px 867px #fff, 168px 1803px #fff, 1264px 1673px #fff, 2279px 687px #fff, 2167px 2402px #fff, 1774px 851px #fff, 890px 1604px #fff, 1094px 1438px #fff, 1995px 1666px #fff;
  height: 1px;
  width: 1px;
}

.particle-2 {
  animation: animParticle 120s linear infinite;
  box-shadow: 0px 0px #fff, 506px 1653px #fff, 58px 1551px #fff, 2269px 1819px #fff, 1647px 684px #fff, 1838px 543px #fff, 1632px 1079px #fff, 163px 2179px #fff, 1811px 2535px #fff, 2413px 1810px #fff, 343px 662px #fff, 1726px 255px #fff, 2097px 821px #fff, 102px 768px #fff, 1940px 1361px #fff, 260px 715px #fff, 233px 2307px #fff, 1671px 2336px #fff, 992px 1966px #fff, 616px 1820px #fff, 1331px 2431px #fff, 236px 893px #fff, 2253px 2542px #fff, 1342px 901px #fff, 417px 2377px #fff, 780px 546px #fff, 679px 1136px #fff, 60px 1162px #fff, 1200px 1216px #fff, 2116px 1258px #fff, 1046px 1506px #fff, 2060px 2522px #fff, 2493px 989px #fff, 2326px 2176px #fff, 1572px 578px #fff, 964px 927px #fff, 2309px 1524px #fff, 1499px 2362px #fff, 1189px 1695px #fff, 1539px 1058px #fff, 1577px 304px #fff, 780px 27px #fff, 650px 1348px #fff, 1589px 276px #fff, 1643px 1417px #fff, 883px 1093px #fff, 1019px 1213px #fff, 1213px 609px #fff, 141px 549px #fff, 2096px 949px #fff, 1948px 1778px #fff, 2023px 2225px #fff, 847px 1822px #fff, 2390px 1747px #fff, 2288px 216px #fff, 1406px 306px #fff, 77px 2186px #fff, 118px 330px #fff, 37px 1228px #fff, 735px 1259px #fff, 2293px 414px #fff, 1504px 1167px #fff, 808px 1173px #fff, 1315px 2496px #fff, 234px 1286px #fff, 1456px 1416px #fff, 1953px 2491px #fff, 1493px 684px #fff, 2079px 1233px #fff, 1008px 2052px #fff, 2166px 502px #fff, 1601px 1969px #fff, 2098px 1797px #fff, 293px 1333px #fff, 2411px 1650px #fff, 1721px 2275px #fff, 626px 1141px #fff, 378px 2143px #fff, 2098px 660px #fff, 240px 642px #fff, 547px 464px #fff, 1253px 268px #fff, 1054px 553px #fff, 2188px 9px #fff, 67px 505px #fff, 182px 1530px #fff, 1222px 170px #fff, 129px 2189px #fff, 2535px 2031px #fff, 1663px 1892px #fff, 271px 450px #fff, 1801px 1079px #fff, 1858px 1158px #fff, 1620px 2040px #fff, 742px 720px #fff, 1431px 620px #fff, 1205px 2111px #fff, 178px 1336px #fff, 356px 24px #fff, 386px 1744px #fff, 1255px 2063px #fff, 2480px 2228px #fff, 2455px 1255px #fff, 2455px 1046px #fff, 570px 641px #fff, 30px 1078px #fff, 720px 1623px #fff, 96px 788px #fff, 19px 1178px #fff, 1225px 905px #fff, 1992px 393px #fff, 2391px 540px #fff, 479px 250px #fff, 137px 2464px #fff, 524px 714px #fff, 702px 712px #fff, 1860px 1821px #fff, 1152px 1443px #fff, 1418px 960px #fff, 2526px 128px #fff, 658px 2357px #fff, 2293px 250px #fff, 1512px 367px #fff, 1542px 332px #fff, 2165px 71px #fff, 1482px 909px #fff, 928px 1797px #fff, 588px 1272px #fff, 2538px 551px #fff, 637px 2030px #fff, 2139px 1549px #fff, 2429px 1411px #fff, 2007px 115px #fff, 2206px 408px #fff, 508px 948px #fff, 7px 409px #fff, 1016px 759px #fff, 303px 2061px #fff, 1132px 1651px #fff, 620px 147px #fff, 442px 872px #fff, 1947px 987px #fff, 372px 543px #fff, 187px 2399px #fff, 932px 413px #fff, 2417px 440px #fff, 632px 756px #fff, 711px 821px #fff, 2120px 1140px #fff, 56px 2013px #fff, 212px 1224px #fff, 226px 1251px #fff, 1978px 1096px #fff, 2228px 1441px #fff, 2096px 1958px #fff, 1584px 1700px #fff, 1684px 1840px #fff, 809px 758px #fff, 589px 792px #fff, 2048px 182px #fff, 361px 2048px #fff, 239px 912px #fff, 952px 2038px #fff, 217px 2545px #fff, 1853px 528px #fff, 766px 629px #fff, 1661px 973px #fff, 736px 2134px #fff, 1672px 1000px #fff, 163px 184px #fff, 1353px 1413px #fff, 1708px 1339px #fff, 114px 1089px #fff, 671px 1899px #fff, 1284px 109px #fff, 1751px 1807px #fff, 1245px 1444px #fff, 2510px 467px #fff, 2369px 983px #fff, 2288px 1779px #fff, 1239px 1546px #fff, 514px 1187px #fff, 1715px 1036px #fff, 680px 1318px #fff, 2127px 772px #fff, 742px 154px #fff, 1606px 1661px #fff, 376px 2022px #fff, 1663px 1723px #fff, 1064px 1441px #fff, 2012px 1621px #fff, 2254px 1891px #fff, 1301px 526px #fff, 1343px 1866px #fff, 1662px 1737px #fff, 1322px 1932px #fff, 1926px 2046px #fff, 542px 646px #fff, 1893px 2151px #fff, 1111px 60px #fff, 870px 1049px #fff;
  height: 2px;
  width: 2px;
}

.particle-2:after {
  box-shadow: 0px 0px #fff, 567px 1486px #fff, 1028px 2277px #fff, 1640px 306px #fff, 1687px 116px #fff, 417px 1428px #fff, 2270px 1232px #fff, 1660px 914px #fff, 2386px 655px #fff, 558px 2133px #fff, 1706px 344px #fff, 1770px 603px #fff, 1848px 1719px #fff, 1816px 1151px #fff, 52px 445px #fff, 1829px 366px #fff, 133px 1663px #fff, 1729px 2286px #fff, 1738px 2184px #fff, 2120px 1704px #fff, 194px 179px #fff, 377px 177px #fff, 1255px 1166px #fff, 2103px 73px #fff, 1948px 420px #fff, 2468px 737px #fff, 242px 2496px #fff, 1076px 2503px #fff, 539px 171px #fff, 310px 1024px #fff, 2180px 669px #fff, 1982px 66px #fff, 2061px 662px #fff, 153px 791px #fff, 749px 1969px #fff, 1859px 2380px #fff, 2242px 903px #fff, 983px 1516px #fff, 2261px 973px #fff, 219px 1571px #fff, 258px 1808px #fff, 145px 2223px #fff, 1570px 1556px #fff, 1669px 2333px #fff, 1547px 2293px #fff, 418px 1673px #fff, 2220px 1778px #fff, 710px 506px #fff, 2378px 185px #fff, 1909px 806px #fff, 662px 2456px #fff, 760px 2022px #fff, 2229px 953px #fff, 1766px 1523px #fff, 338px 1266px #fff, 1549px 544px #fff, 353px 868px #fff, 1738px 127px #fff, 1037px 323px #fff, 277px 2465px #fff, 2186px 1620px #fff, 534px 2181px #fff, 310px 2202px #fff, 2078px 639px #fff, 534px 1899px #fff, 1154px 1073px #fff, 551px 2240px #fff, 2283px 2134px #fff, 1829px 1453px #fff, 1234px 1116px #fff, 248px 22px #fff, 170px 1644px #fff, 1374px 1649px #fff, 816px 1336px #fff, 2190px 730px #fff, 2031px 529px #fff, 386px 770px #fff, 2554px 5px #fff, 1102px 1660px #fff, 24px 388px #fff, 2236px 715px #fff, 2471px 2292px #fff, 507px 1250px #fff, 1788px 2292px #fff, 978px 2553px #fff, 1946px 1969px #fff, 417px 1915px #fff, 603px 2542px #fff, 971px 2090px #fff, 2072px 239px #fff, 1325px 617px #fff, 1418px 1361px #fff, 1782px 242px #fff, 1789px 1747px #fff, 2309px 109px #fff, 708px 1516px #fff, 1959px 388px #fff, 383px 175px #fff, 1155px 1407px #fff, 42px 1016px #fff, 210px 1385px #fff, 2029px 1035px #fff, 225px 66px #fff, 481px 97px #fff, 128px 1918px #fff, 1969px 860px #fff, 1853px 163px #fff, 1493px 145px #fff, 1479px 1968px #fff, 1483px 2496px #fff, 1061px 583px #fff, 2104px 105px #fff, 1991px 594px #fff, 1584px 843px #fff, 1248px 858px #fff, 1808px 1565px #fff, 139px 1638px #fff, 1111px 785px #fff, 2218px 1279px #fff, 2334px 1383px #fff, 629px 309px #fff, 12px 2525px #fff, 1545px 1721px #fff, 267px 1737px #fff, 2211px 619px #fff, 1980px 590px #fff, 2003px 1560px #fff, 1529px 490px #fff, 2287px 944px #fff, 2190px 2459px #fff, 2496px 1879px #fff, 2399px 972px #fff, 1959px 1514px #fff, 932px 2283px #fff, 975px 658px #fff, 1503px 1486px #fff, 21px 41px #fff, 1789px 505px #fff, 1109px 1170px #fff, 1696px 231px #fff, 904px 1068px #fff, 919px 927px #fff, 1743px 2481px #fff, 2196px 410px #fff, 2485px 2111px #fff, 1053px 1712px #fff, 744px 482px #fff, 1097px 1264px #fff, 2487px 1317px #fff, 2318px 1339px #fff, 2171px 485px #fff, 62px 1479px #fff, 2039px 1904px #fff, 1124px 601px #fff, 573px 1122px #fff, 1336px 1527px #fff, 1312px 1940px #fff, 24px 1511px #fff, 785px 2282px #fff, 33px 659px #fff, 158px 2074px #fff, 2488px 267px #fff, 2058px 700px #fff, 328px 1317px #fff, 172px 1448px #fff, 1203px 1770px #fff, 1400px 166px #fff, 317px 2282px #fff, 1059px 1105px #fff, 589px 1476px #fff, 375px 2101px #fff, 1058px 1255px #fff, 2116px 478px #fff, 1223px 880px #fff, 2286px 1596px #fff, 562px 1716px #fff, 811px 1236px #fff, 348px 1298px #fff, 896px 363px #fff, 897px 716px #fff, 341px 971px #fff, 33px 259px #fff, 2191px 1397px #fff, 754px 783px #fff, 2000px 2232px #fff, 389px 1955px #fff, 926px 897px #fff, 1459px 1750px #fff, 1110px 1760px #fff, 1458px 1387px #fff, 300px 1679px #fff, 1580px 2052px #fff, 2455px 610px #fff, 2433px 1009px #fff, 404px 2348px #fff, 239px 380px #fff, 150px 2262px #fff, 1882px 1392px #fff, 967px 2322px #fff, 1492px 2315px #fff, 1311px 2552px #fff;
  height: 2px;
  width: 2px;
}

.particle-3 {
  animation: animParticle 180s linear infinite;
  box-shadow: 0px 0px #fff, 2431px 2225px #fff, 182px 85px #fff, 1355px 110px #fff, 1617px 517px #fff, 1106px 2373px #fff, 381px 1134px #fff, 1435px 1463px #fff, 1182px 1650px #fff, 1992px 627px #fff, 2098px 2116px #fff, 2431px 1532px #fff, 2099px 1580px #fff, 359px 550px #fff, 2177px 1649px #fff, 522px 2443px #fff, 703px 2261px #fff, 396px 57px #fff, 261px 958px #fff, 2326px 2255px #fff, 2264px 1718px #fff, 85px 1108px #fff, 1012px 1594px #fff, 1388px 1775px #fff, 2029px 124px #fff, 638px 353px #fff, 2516px 1874px #fff, 1419px 1858px #fff, 1275px 462px #fff, 1736px 684px #fff, 1110px 2325px #fff, 465px 2559px #fff, 868px 1627px #fff, 1334px 1958px #fff, 1427px 818px #fff, 2341px 79px #fff, 1962px 1881px #fff, 1989px 2357px #fff, 425px 1466px #fff, 1484px 1346px #fff, 2128px 1454px #fff, 1254px 2325px #fff, 852px 114px #fff, 1481px 1471px #fff, 1064px 501px #fff, 1004px 2544px #fff, 2284px 2071px #fff, 640px 1708px #fff, 559px 876px #fff, 952px 379px #fff, 2236px 2117px #fff, 39px 1965px #fff, 1243px 1422px #fff, 2343px 316px #fff, 1264px 468px #fff, 1848px 1668px #fff, 1943px 1808px #fff, 2354px 1650px #fff, 1650px 1745px #fff, 514px 366px #fff, 1591px 799px #fff, 2444px 1662px #fff, 825px 325px #fff, 2011px 2381px #fff, 1839px 731px #fff, 2535px 1733px #fff, 157px 648px #fff, 723px 2143px #fff, 165px 425px #fff, 404px 772px #fff, 1988px 2194px #fff, 752px 2366px #fff, 2476px 1090px #fff, 789px 2134px #fff, 2189px 1157px #fff, 1112px 927px #fff, 790px 936px #fff, 1264px 152px #fff, 41px 1839px #fff, 2009px 465px #fff, 1390px 2081px #fff, 2410px 706px #fff, 2330px 565px #fff, 952px 1724px #fff, 680px 379px #fff, 1472px 1470px #fff, 1594px 2050px #fff, 1976px 953px #fff, 1389px 1912px #fff, 1996px 405px #fff, 68px 1821px #fff, 1969px 1026px #fff, 1564px 656px #fff, 225px 2245px #fff, 2478px 744px #fff, 2446px 52px #fff, 503px 765px #fff, 201px 1613px #fff, 69px 201px #fff, 803px 2137px #fff, 2110px 663px #fff;
  height: 3px;
  width: 3px;
}

.particle-3:after {
  box-shadow: 0px 0px #fff, 1120px 2453px #fff, 1792px 865px #fff, 1988px 1838px #fff, 2477px 815px #fff, 599px 2084px #fff, 578px 333px #fff, 1125px 845px #fff, 1019px 2194px #fff, 394px 1708px #fff, 1913px 952px #fff, 2315px 2322px #fff, 1988px 844px #fff, 2442px 2366px #fff, 900px 2228px #fff, 2500px 1032px #fff, 2425px 413px #fff, 776px 231px #fff, 1863px 1944px #fff, 1785px 1833px #fff, 1988px 1835px #fff, 76px 86px #fff, 431px 185px #fff, 326px 1910px #fff, 1632px 525px #fff, 1641px 1433px #fff, 471px 806px #fff, 246px 1691px #fff, 2124px 1539px #fff, 1081px 589px #fff, 314px 1083px #fff, 451px 1508px #fff, 1464px 1429px #fff, 2373px 1646px #fff, 2066px 1547px #fff, 1024px 698px #fff, 494px 224px #fff, 1125px 2396px #fff, 1424px 1847px #fff, 224px 355px #fff, 1857px 1106px #fff, 984px 2405px #fff, 1726px 1843px #fff, 1108px 1883px #fff, 347px 1470px #fff, 705px 1672px #fff, 2091px 1869px #fff, 115px 414px #fff, 299px 2494px #fff, 228px 2523px #fff, 773px 459px #fff, 1744px 1181px #fff, 2464px 803px #fff, 2323px 1844px #fff, 1397px 499px #fff, 1240px 297px #fff, 2236px 1223px #fff, 655px 960px #fff, 1008px 659px #fff, 2073px 304px #fff, 1040px 2482px #fff, 641px 1039px #fff, 1232px 2401px #fff, 1957px 870px #fff, 2159px 1784px #fff, 402px 2257px #fff, 1460px 1563px #fff, 2115px 831px #fff, 2536px 1993px #fff, 277px 2000px #fff, 458px 1138px #fff, 2072px 1165px #fff, 1986px 1525px #fff, 729px 1893px #fff, 373px 1386px #fff, 1955px 1971px #fff, 2426px 1542px #fff, 861px 231px #fff, 1979px 2113px #fff, 427px 1121px #fff, 1145px 828px #fff, 667px 238px #fff, 564px 1984px #fff, 2204px 2257px #fff, 688px 1958px #fff, 1646px 2489px #fff, 1489px 102px #fff, 1415px 1025px #fff, 992px 903px #fff, 2249px 1551px #fff, 44px 1755px #fff, 807px 135px #fff, 675px 159px #fff, 2419px 2503px #fff, 2370px 732px #fff, 2277px 1945px #fff, 2203px 2430px #fff, 459px 1644px #fff, 444px 1244px #fff, 348px 394px #fff, 2245px 523px #fff;
  height: 3px;
  width: 3px;
}

.particle-4 {
  animation: animParticle 600s linear infinite;
  box-shadow: 0px 0px #fff, 2102px 943px #fff, 318px 625px #fff, 1994px 2058px #fff, 2219px 2541px #fff, 1068px 1899px #fff, 2222px 197px #fff, 1326px 1672px #fff, 825px 695px #fff, 30px 2393px #fff, 2322px 368px #fff, 191px 1244px #fff, 1818px 1685px #fff, 956px 1457px #fff, 1040px 447px #fff, 854px 428px #fff, 1235px 1305px #fff, 2414px 1280px #fff, 1829px 1511px #fff, 2128px 742px #fff, 547px 1157px #fff, 101px 197px #fff, 1208px 662px #fff, 470px 521px #fff, 318px 1108px #fff, 1079px 1001px #fff, 1458px 831px #fff, 574px 445px #fff, 593px 1737px #fff, 147px 1675px #fff, 1667px 443px #fff, 540px 1466px #fff, 322px 1233px #fff, 625px 2361px #fff, 2446px 1438px #fff, 993px 1728px #fff, 1578px 1563px #fff, 242px 2221px #fff, 1279px 489px #fff, 2538px 555px #fff, 2254px 1218px #fff, 328px 330px #fff, 1241px 708px #fff, 783px 959px #fff, 2003px 998px #fff, 2336px 1669px #fff, 1462px 725px #fff, 2092px 1696px #fff, 921px 2543px #fff, 50px 1297px #fff, 1321px 156px #fff, 1222px 927px #fff, 676px 2057px #fff, 1263px 467px #fff, 946px 2393px #fff, 2057px 548px #fff, 2189px 1578px #fff, 181px 205px #fff, 1078px 1523px #fff, 670px 765px #fff, 989px 733px #fff, 735px 930px #fff, 1355px 1464px #fff, 2184px 1974px #fff, 2042px 1287px #fff, 2217px 1693px #fff, 445px 2042px #fff, 413px 1965px #fff, 4px 1251px #fff, 242px 1159px #fff, 292px 1714px #fff, 1296px 1826px #fff, 267px 1105px #fff, 438px 2520px #fff, 467px 999px #fff, 1698px 573px #fff, 2526px 2081px #fff, 1406px 2176px #fff, 1989px 792px #fff, 573px 1236px #fff, 819px 1270px #fff, 1871px 421px #fff, 1571px 207px #fff, 1209px 1927px #fff, 2095px 2000px #fff, 127px 1769px #fff, 1999px 84px #fff, 1760px 1453px #fff, 2018px 516px #fff, 1722px 375px #fff, 59px 731px #fff, 1500px 1993px #fff, 2551px 856px #fff, 2210px 1077px #fff, 537px 2354px #fff, 1173px 1405px #fff, 1951px 847px #fff, 1280px 2464px #fff, 1335px 2114px #fff, 1077px 1991px #fff, 1889px 234px #fff, 253px 2104px #fff, 1701px 644px #fff, 1744px 466px #fff, 229px 1093px #fff, 831px 338px #fff, 323px 1189px #fff, 1999px 447px #fff, 2548px 1448px #fff, 989px 2313px #fff, 481px 443px #fff, 1957px 1402px #fff, 1054px 700px #fff, 2209px 1173px #fff, 258px 2505px #fff, 1110px 688px #fff, 332px 1068px #fff, 2171px 2149px #fff, 1090px 504px #fff, 1928px 831px #fff, 1009px 326px #fff, 2295px 163px #fff, 1198px 2363px #fff, 1938px 68px #fff, 1297px 2432px #fff, 1429px 2271px #fff, 1723px 511px #fff, 638px 2093px #fff, 2077px 78px #fff, 2015px 784px #fff, 441px 355px #fff, 878px 2066px #fff, 2154px 208px #fff, 1110px 632px #fff, 525px 2382px #fff, 1790px 136px #fff, 1053px 1547px #fff, 1889px 1429px #fff, 1023px 143px #fff, 829px 1654px #fff, 1958px 2543px #fff, 1575px 1381px #fff, 359px 1113px #fff, 56px 2081px #fff, 1197px 9px #fff, 747px 302px #fff, 276px 302px #fff, 2353px 485px #fff, 2234px 1274px #fff, 2436px 1034px #fff, 1786px 564px #fff, 2468px 1622px #fff, 543px 449px #fff, 2320px 824px #fff, 1556px 1231px #fff, 753px 2286px #fff, 837px 312px #fff, 810px 821px #fff, 570px 2027px #fff, 1199px 496px #fff, 225px 2202px #fff, 6px 314px #fff, 11px 2367px #fff, 518px 881px #fff, 572px 684px #fff, 526px 1100px #fff, 1705px 35px #fff, 807px 1381px #fff, 559px 1372px #fff, 2470px 1796px #fff, 435px 1716px #fff, 1943px 781px #fff, 1981px 233px #fff, 1405px 470px #fff, 899px 561px #fff, 1260px 639px #fff, 793px 974px #fff, 928px 464px #fff, 1631px 1879px #fff, 2179px 909px #fff, 137px 1888px #fff, 1756px 1415px #fff, 1718px 1044px #fff, 467px 477px #fff, 1422px 1520px #fff, 15px 2008px #fff, 30px 1859px #fff, 1575px 2503px #fff, 1650px 2380px #fff, 1617px 1555px #fff, 763px 1114px #fff, 100px 148px #fff, 163px 1078px #fff, 1245px 1445px #fff, 789px 1345px #fff, 1723px 2085px #fff, 735px 1457px #fff, 161px 718px #fff, 1205px 73px #fff, 2200px 852px #fff, 1021px 1930px #fff, 1430px 792px #fff, 821px 1806px #fff, 1965px 1014px #fff, 2261px 534px #fff, 1551px 560px #fff, 2142px 2125px #fff, 1593px 1168px #fff, 819px 755px #fff, 229px 1464px #fff, 1115px 1542px #fff, 1760px 69px #fff, 986px 324px #fff, 1632px 2130px #fff, 766px 2388px #fff, 424px 253px #fff, 289px 1002px #fff, 43px 837px #fff, 2056px 1850px #fff, 2488px 1112px #fff, 2335px 1191px #fff, 2558px 2243px #fff, 2359px 287px #fff, 1188px 1326px #fff, 1149px 1035px #fff, 1638px 174px #fff, 1927px 1373px #fff, 892px 292px #fff, 231px 1718px #fff, 1970px 250px #fff, 968px 1885px #fff, 1580px 2419px #fff, 2332px 348px #fff, 2044px 1991px #fff, 706px 584px #fff, 704px 200px #fff, 1296px 2350px #fff, 2373px 2280px #fff, 398px 966px #fff, 555px 660px #fff, 581px 1759px #fff, 2351px 1416px #fff, 1866px 235px #fff, 1707px 2102px #fff, 1645px 2548px #fff, 1232px 1394px #fff, 72px 803px #fff, 1132px 1970px #fff, 1476px 1794px #fff, 1194px 383px #fff, 478px 403px #fff, 308px 452px #fff, 2296px 1926px #fff, 1821px 1183px #fff, 782px 1309px #fff, 1631px 98px #fff, 2304px 2463px #fff, 2362px 1653px #fff, 1176px 2325px #fff, 872px 2312px #fff, 755px 1577px #fff, 2322px 305px #fff, 2255px 613px #fff, 1738px 1486px #fff, 829px 1713px #fff, 1445px 886px #fff, 2269px 1200px #fff, 2102px 303px #fff, 1976px 917px #fff, 2428px 956px #fff, 1919px 437px #fff, 772px 1677px #fff, 2336px 1423px #fff, 673px 1447px #fff, 2481px 1469px #fff, 857px 421px #fff, 292px 46px #fff, 2370px 2474px #fff, 2404px 794px #fff, 1293px 409px #fff, 1716px 1710px #fff, 2233px 1526px #fff, 149px 2170px #fff, 2265px 347px #fff, 2507px 1477px #fff, 1465px 1899px #fff, 1340px 1198px #fff, 194px 1087px #fff, 1404px 663px #fff, 119px 1756px #fff, 1143px 1841px #fff, 1848px 1604px #fff, 394px 2141px #fff, 1708px 414px #fff, 8px 2382px #fff, 451px 1019px #fff, 1539px 182px #fff, 1845px 698px #fff, 161px 1183px #fff, 2206px 431px #fff, 2120px 1940px #fff, 2238px 1709px #fff, 1108px 56px #fff, 1174px 901px #fff, 196px 1940px #fff, 2367px 2444px #fff, 2449px 110px #fff, 947px 1184px #fff, 1339px 560px #fff, 1238px 1107px #fff, 2472px 1578px #fff, 1163px 254px #fff, 699px 1521px #fff, 709px 258px #fff, 2426px 1052px #fff, 1564px 742px #fff, 448px 1935px #fff, 96px 1788px #fff, 1047px 350px #fff, 907px 1644px #fff, 590px 908px #fff, 2271px 372px #fff, 2559px 1829px #fff, 977px 1186px #fff, 406px 1051px #fff, 58px 1177px #fff, 4px 2533px #fff, 1045px 2185px #fff, 1082px 801px #fff, 1490px 966px #fff, 2505px 1688px #fff, 1280px 587px #fff, 893px 1347px #fff, 1064px 376px #fff, 2511px 121px #fff, 1995px 1402px #fff, 1844px 2213px #fff, 308px 2329px #fff, 2350px 315px #fff, 299px 2532px #fff, 2434px 1481px #fff, 527px 2438px #fff, 834px 2088px #fff, 2549px 2551px #fff, 1999px 85px #fff, 144px 1825px #fff, 784px 1973px #fff, 970px 2489px #fff, 1944px 885px #fff, 279px 2482px #fff, 771px 1583px #fff, 238px 2283px #fff, 2475px 1363px #fff, 967px 55px #fff, 1724px 512px #fff, 2326px 1248px #fff, 1448px 1476px #fff, 1415px 230px #fff, 1951px 56px #fff, 2178px 674px #fff, 896px 1226px #fff, 1752px 1494px #fff, 2363px 1215px #fff, 139px 1981px #fff, 1725px 242px #fff, 507px 867px #fff, 211px 1826px #fff, 673px 357px #fff, 758px 1231px #fff, 2089px 1576px #fff, 2341px 2544px #fff, 877px 444px #fff, 499px 1755px #fff, 1360px 1722px #fff, 2374px 2360px #fff, 2151px 2269px #fff, 2260px 207px #fff, 788px 699px #fff, 1px 389px #fff, 1554px 1805px #fff, 2282px 1459px #fff, 2292px 2470px #fff, 1615px 2525px #fff, 716px 1813px #fff, 2103px 2382px #fff, 391px 2184px #fff, 1480px 986px #fff, 2219px 866px #fff, 334px 169px #fff, 559px 1763px #fff, 1398px 32px #fff, 697px 2510px #fff, 2550px 451px #fff, 2540px 601px #fff, 661px 1097px #fff, 631px 1876px #fff, 1596px 1449px #fff, 1525px 283px #fff, 547px 498px #fff, 337px 337px #fff, 153px 1215px #fff;
  height: 1px;
  width: 1px;
}

.particle-4:after {
  box-shadow: 0px 0px #fff, 1558px 1749px #fff, 420px 2303px #fff, 1140px 1682px #fff, 2362px 1024px #fff, 1860px 1203px #fff, 2488px 1246px #fff, 586px 1363px #fff, 1214px 1667px #fff, 1293px 1471px #fff, 138px 1290px #fff, 1351px 1467px #fff, 1308px 40px #fff, 2021px 1885px #fff, 1054px 2482px #fff, 939px 1360px #fff, 1490px 1255px #fff, 1269px 1711px #fff, 2081px 509px #fff, 1748px 2551px #fff, 435px 275px #fff, 2276px 489px #fff, 2473px 186px #fff, 389px 2207px #fff, 831px 1201px #fff, 2104px 1298px #fff, 407px 1952px #fff, 2306px 2552px #fff, 341px 1379px #fff, 606px 1223px #fff, 626px 842px #fff, 575px 2201px #fff, 1835px 2550px #fff, 686px 2198px #fff, 1703px 2405px #fff, 1959px 915px #fff, 1505px 1558px #fff, 552px 1843px #fff, 2075px 849px #fff, 373px 95px #fff, 810px 583px #fff, 2036px 2421px #fff, 537px 40px #fff, 1469px 2124px #fff, 2532px 275px #fff, 139px 1556px #fff, 1430px 340px #fff, 2351px 747px #fff, 276px 2199px #fff, 1461px 1923px #fff, 960px 1618px #fff, 1001px 294px #fff, 1144px 769px #fff, 448px 1082px #fff, 2123px 387px #fff, 2274px 503px #fff, 783px 570px #fff, 1182px 294px #fff, 225px 2522px #fff, 2156px 735px #fff, 2013px 1460px #fff, 1737px 2305px #fff, 756px 1343px #fff, 1132px 1280px #fff, 393px 1757px #fff, 1538px 1338px #fff, 526px 2118px #fff, 699px 2315px #fff, 2189px 2297px #fff, 2526px 722px #fff, 888px 1576px #fff, 678px 2400px #fff, 1643px 1399px #fff, 1258px 1598px #fff, 1729px 2510px #fff, 1445px 2489px #fff, 960px 85px #fff, 1568px 2269px #fff, 2260px 1662px #fff, 1657px 892px #fff, 331px 2256px #fff, 1331px 1042px #fff, 987px 414px #fff, 1976px 2546px #fff, 941px 2560px #fff, 1818px 2529px #fff, 2401px 746px #fff, 930px 789px #fff, 90px 2032px #fff, 752px 1240px #fff, 1852px 2397px #fff, 1446px 1547px #fff, 367px 221px #fff, 160px 2346px #fff, 1518px 1971px #fff, 1109px 650px #fff, 300px 1549px #fff, 732px 2085px #fff, 2501px 1489px #fff, 830px 1749px #fff, 1313px 15px #fff, 2374px 1595px #fff, 1439px 368px #fff, 128px 867px #fff, 1625px 679px #fff, 274px 316px #fff, 1435px 2384px #fff, 1981px 1444px #fff, 2246px 194px #fff, 1714px 347px #fff, 375px 1248px #fff, 745px 2507px #fff, 71px 847px #fff, 1795px 2072px #fff, 2246px 1009px #fff, 805px 1922px #fff, 455px 2457px #fff, 953px 1119px #fff, 73px 1311px #fff, 353px 1686px #fff, 1723px 2510px #fff, 2229px 478px #fff, 1779px 1797px #fff, 922px 1427px #fff, 1176px 1323px #fff, 1764px 781px #fff, 112px 403px #fff, 294px 324px #fff, 2179px 35px #fff, 1765px 1555px #fff, 1018px 1519px #fff, 419px 1937px #fff, 1482px 2441px #fff, 898px 619px #fff, 2020px 913px #fff, 7px 1184px #fff, 2111px 384px #fff, 2154px 2031px #fff, 2254px 2231px #fff, 390px 360px #fff, 2489px 2030px #fff, 1311px 883px #fff, 1186px 296px #fff, 356px 1597px #fff, 1876px 1944px #fff, 1494px 1989px #fff, 2253px 1944px #fff, 1594px 912px #fff, 1970px 2444px #fff, 89px 2152px #fff, 1184px 1889px #fff, 920px 1424px #fff, 1134px 385px #fff, 2318px 1400px #fff, 2335px 424px #fff, 1284px 1951px #fff, 792px 1040px #fff, 831px 722px #fff, 2543px 2025px #fff, 1055px 2287px #fff, 121px 2397px #fff, 1847px 784px #fff, 1837px 992px #fff, 2080px 2531px #fff, 892px 2506px #fff, 2314px 710px #fff, 2209px 21px #fff, 1765px 1995px #fff, 2467px 767px #fff, 792px 704px #fff, 2427px 515px #fff, 992px 1463px #fff, 2150px 593px #fff, 1340px 1604px #fff, 1573px 92px #fff, 648px 207px #fff, 477px 1112px #fff, 461px 370px #fff, 339px 1478px #fff, 2321px 2516px #fff, 1225px 1653px #fff, 126px 174px #fff, 1403px 809px #fff, 1713px 1844px #fff, 367px 580px #fff, 227px 211px #fff, 460px 41px #fff, 2368px 2433px #fff, 1676px 2487px #fff, 309px 1035px #fff, 1672px 1961px #fff, 1108px 1573px #fff, 2206px 1943px #fff, 1801px 799px #fff, 1815px 779px #fff, 2474px 137px #fff, 2494px 2186px #fff, 1132px 56px #fff, 1388px 168px #fff, 1220px 829px #fff, 2356px 854px #fff, 1784px 1257px #fff, 512px 1845px #fff, 1463px 320px #fff, 292px 566px #fff, 2459px 2263px #fff, 1671px 2517px #fff, 1461px 2040px #fff, 1121px 2050px #fff, 1858px 2244px #fff, 2431px 1442px #fff, 1545px 2203px #fff, 2248px 1768px #fff, 123px 468px #fff, 1337px 865px #fff, 2013px 1532px #fff, 774px 2475px #fff, 946px 1750px #fff, 1710px 140px #fff, 627px 1078px #fff, 434px 2256px #fff, 665px 1906px #fff, 2422px 2063px #fff, 418px 1287px #fff, 278px 1711px #fff, 1211px 2359px #fff, 1290px 545px #fff, 461px 2418px #fff, 1576px 300px #fff, 1783px 754px #fff, 534px 1903px #fff, 570px 33px #fff, 694px 2375px #fff, 584px 422px #fff, 1670px 24px #fff, 2442px 1266px #fff, 2476px 1129px #fff, 1237px 267px #fff, 1459px 1198px #fff, 279px 727px #fff, 1806px 272px #fff, 1431px 649px #fff, 2021px 1883px #fff, 1260px 799px #fff, 918px 812px #fff, 1334px 712px #fff, 2410px 590px #fff, 815px 340px #fff, 1051px 2533px #fff, 594px 930px #fff, 1706px 2035px #fff, 1278px 2130px #fff, 2208px 336px #fff, 2413px 1528px #fff, 1588px 1390px #fff, 768px 1973px #fff, 1614px 1672px #fff, 27px 1852px #fff, 1427px 2388px #fff, 1294px 1878px #fff, 1539px 850px #fff, 1805px 2234px #fff, 1779px 1240px #fff, 747px 91px #fff, 1382px 669px #fff, 1492px 575px #fff, 157px 766px #fff, 992px 587px #fff, 906px 1828px #fff, 1769px 1335px #fff, 1261px 298px #fff, 1641px 2251px #fff, 2491px 1932px #fff, 1437px 751px #fff, 2407px 1382px #fff, 499px 455px #fff, 959px 569px #fff, 779px 1947px #fff, 112px 2553px #fff, 2514px 930px #fff, 2103px 2282px #fff, 2327px 586px #fff, 1109px 2359px #fff, 1356px 2007px #fff, 2085px 1400px #fff, 2243px 1020px #fff, 845px 25px #fff, 2460px 303px #fff, 1617px 1525px #fff, 541px 2522px #fff, 2364px 1983px #fff, 564px 398px #fff, 147px 1109px #fff, 2318px 589px #fff, 1130px 1588px #fff, 2033px 83px #fff, 1884px 2269px #fff, 852px 708px #fff, 2293px 1870px #fff, 411px 1188px #fff, 2429px 2334px #fff, 936px 1825px #fff, 1193px 325px #fff, 2279px 448px #fff, 1897px 2188px #fff, 9px 2261px #fff, 2558px 373px #fff, 340px 2286px #fff, 9px 101px #fff, 559px 358px #fff, 1609px 1173px #fff, 366px 1422px #fff, 803px 2555px #fff, 1775px 2325px #fff, 845px 285px #fff, 479px 1291px #fff, 1984px 1579px #fff, 1066px 100px #fff, 2270px 528px #fff, 1537px 2271px #fff, 2346px 2117px #fff, 1613px 2266px #fff, 17px 1594px #fff, 835px 698px #fff, 1632px 1141px #fff, 1301px 2217px #fff, 1990px 1761px #fff, 1913px 892px #fff, 505px 2331px #fff, 251px 1557px #fff, 2308px 101px #fff, 1495px 1697px #fff, 1660px 108px #fff, 2486px 1789px #fff, 841px 2048px #fff, 674px 695px #fff, 2543px 2142px #fff, 258px 8px #fff, 2234px 2353px #fff, 1566px 2007px #fff, 1683px 1894px #fff, 1457px 572px #fff, 2029px 2236px #fff, 2145px 2113px #fff, 281px 397px #fff, 1196px 804px #fff, 2014px 1394px #fff, 10px 1076px #fff, 1378px 557px #fff, 2403px 432px #fff, 1319px 811px #fff, 1995px 2117px #fff, 743px 922px #fff, 763px 441px #fff, 2188px 754px #fff, 1572px 633px #fff, 2361px 1080px #fff, 2271px 225px #fff, 2102px 1762px #fff, 1257px 2020px #fff, 2227px 2399px #fff, 1727px 1273px #fff, 966px 1263px #fff, 499px 2285px #fff, 2222px 1176px #fff, 218px 2086px #fff, 2317px 633px #fff, 799px 2531px #fff, 2378px 2028px #fff, 757px 1993px #fff, 1753px 40px #fff, 582px 896px #fff, 428px 798px #fff, 2267px 1181px #fff, 2383px 610px #fff, 367px 1501px #fff, 1061px 1112px #fff, 539px 1823px #fff, 1648px 2413px #fff, 504px 2080px #fff, 761px 1167px #fff, 1081px 2231px #fff, 153px 2078px #fff, 1254px 302px #fff, 1255px 941px #fff, 1943px 2196px #fff, 1148px 1875px #fff, 1838px 1125px #fff, 2102px 1335px #fff, 2414px 1242px #fff, 2036px 113px #fff, 1365px 1694px #fff, 1691px 926px #fff, 849px 570px #fff, 1689px 533px #fff, 1872px 1636px #fff, 1907px 257px #fff, 334px 1949px #fff, 126px 1635px #fff, 2059px 1210px #fff, 252px 859px #fff;
  height: 1px;
  width: 1px;
}

@keyframes animParticle {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2560px);
  }
}
}


@media screen and (max-width: 1499px){
    .home-banner-inner {
        .overlay{
            padding-top: 200px;
        }
    }
    .home-banner-text {
        margin-bottom: 80px;
        h1{
            font-size: 90px;
            margin-bottom: 30px;
        }
        p{
            margin-bottom: 40px;
        }
    }
    .home-banner-inner {
        .overlay {
            .masd-grad{
                right: 0px;
            }
        }
    }
    .banner-card {
        h2{
            font-size: 40px;
            margin: 4px 0px;
        }
    }
    .banner-card2{
        padding: 19.5px 38px;
    }
}
@media screen and (max-width: 1199px){
    .home-banner-text {
        max-width: 530px;
        h1{
            font-size: 60px;
        }
        p{
            font-size: 14px;
        }
    }
    .banner-card, .banner-card2 {
        h2{
            font-size: 30px;
        }
    }
    .number-diy {
        .data {
            font-size: 30px !important;
            div{
                width: 20px !important;
                span{
                    width: 20px !important;
                }
            }
        }
    }
}
@media screen and (max-width: 991px){
    .home-banner-inner {
        .overlay{
            padding-top: 180px;
            padding-bottom: 70px;
        }
    }
    .banner-card{
        margin-bottom: 30px;
        p{
            line-height: 50px;
        }
    }
    .banner-img{
        top: -25%;
        .coin-img{
            max-width: 140px;
        }
    }
}
@media screen and (max-width: 767px){
    .home-banner-inner {
        .overlay{
            padding-top: 130px;
        }
    }
    .home-banner-text {
        h1{
            font-size: 50px;
        }
    }
    .banner-video-card {
        h2{
            .cd-words-wrapper{
                width: 380px !important;
                b{
                    width: 380px !important;
                }
            }
        }
    }
    .banner-video-card {
        h2{
            .cd-words-wrapper{
                width: 380px !important;
                b{
                    width: 380px !important;
                }
            }
        }
    }
    .banner-img{
        top: -15%;
        .coin-img{
            max-width: 120px;
        }
    }
}
@media screen and (max-width: 575px){
    .home-banner-text {
        h1{
            font-size: 40px;
        }
        p{
            font-size: 16px;
        }
    }
    .banner-video-card {
        h2{
            font-size: 32px;
            .cd-words-wrapper{
                width: 300px !important;
                b{
                    width: 300px !important;
                }
            }
        }
    }
    .banner-video-card {
        h2{
            font-size: 32px;
            .cd-words-wrapper{
                width: 300px !important;
                b{
                    width: 300px !important;
                }
            }
        }
    }
    .banner-img{
        top: -10%;
    }
}
@media screen and (max-width: 425px){
    .home-banner-text {
        h1{
            font-size: 30px;
        }
    }
    .banner-card {
        h2{
            font-size: 22px;
        }
        p{
            font-size: 14px;
        }
        &2{
            h2{
                font-size: 22px;
            }
            p{
                font-size: 14px;
            }
        }
    }
    .banner-video-card {
        height: 250px;
        h2 {
            font-size: 26px;
            .cd-words-wrapper {
                width: 210px !important;
                b {
                    width: 210px !important;
                }
            }
        }
    }
}

`;

export default BannerStyle;
