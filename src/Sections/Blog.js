import React from "react";
import '../App.css';

export default function Blog() {
    function getTitle(text) {
        const output = []
        for (let i = 0; i < text.length; i++) {
            output.push(
                <span className="h2" key={`${text}${i}`}>{text[i]}</span>
            )
        }

        return output
    }

    return(
        <div className="portfolio blog">
            <div className="width">
                <h6>&nbsp;&nbsp;&nbsp;&nbsp;&#60;h2&#62;</h6>
                <div className="portfolio-description">
                    {getTitle('Blog')}
                </div>
                <h6>&nbsp;&nbsp;&nbsp;&nbsp;&#60;/h2&#62;</h6>
            </div>
            <div className="width blog-blogcont">
                <div className="blog-blog" style={{borderTop: '#EF798A solid 4px'}} >
                    <a href="https://medium.com/marketingdatascience/%E5%B7%9D%E6%99%AE%E8%88%87%E5%B8%8C%E6%8B%89%E8%95%8A%E7%9A%84%E4%B8%96%E7%B4%80%E8%A8%80%E8%AB%96%E5%B0%8D%E6%B1%BA-5592d9984bc6" target='_blank'>
                        川普與希拉蕊的世紀言論對決</a>
                    <p>情境、社群平台和政治一直有著密不可分的關係，任何社群平台中的消息，都可能潛移默化地影響競選人的民意...</p>
                </div>
                <div className="blog-blog" style={{borderTop: '#129490 solid 4px'}} >
                    <a href="https://medium.com/marketingdatascience/%E4%BD%A0%E7%9A%84%E8%AB%8B%E6%B1%82%E9%99%8C%E7%94%9F%E4%BA%BA%E6%98%AF%E5%90%A6%E6%9C%83%E7%AD%94%E6%87%89-%E6%8A%AB%E8%96%A9%E7%9A%84%E9%9A%A8%E6%A9%9F%E8%A1%8C%E7%82%BA-c0e4662dccba" target='_blank'>
                    您的請求陌生人是否會答應？ — 不同情境下人們是否願意捐贈披薩</a>
                    <p>情境 ｢今天是我丈夫的生日，我想帶他出去吃晚餐但沒有足夠的錢...</p>
                </div>
                <div className="blog-blog" style={{borderTop: '#02182B solid 4px'}} >
                    <a href="https://medium.com/marketingdatascience/%E8%87%AA%E5%8B%95%E7%AF%A9%E9%81%B8%E6%83%A1%E6%84%8F%E8%A8%80%E8%AB%96-%E6%89%BE%E5%87%BA%E7%9C%81%E9%8C%A2%E9%97%9C%E9%8D%B5-%E6%B7%B1%E5%BA%A6%E5%AD%B8%E7%BF%92%E6%87%89%E7%94%A8%E7%AF%87-%E5%BD%B1%E9%9F%B3%E5%B9%B3%E5%8F%B0%E5%8F%8A%E7%B7%9A%E4%B8%8A%E7%99%BE%E7%A7%91%E5%85%A8%E6%9B%B8%E4%B9%8B%E6%87%89%E7%94%A8-c8130413f314" target='_blank'>
                    自動篩選惡意言論，找出省錢關鍵！深度學習應用篇</a>
                    <p>我們講解了如何利用深度學習中的 GRU 模型，在問答平台上精準地去除惡意留言...</p>
                </div>
                <div className="blog-blog" style={{borderTop: '#DE9151 solid 4px'}} >
                    <a href="https://medium.com/marketingdatascience/%E5%88%A9%E7%94%A8-gru-%E6%A8%A1%E5%9E%8B%E6%89%BE%E5%87%BA%E7%B7%9A%E4%B8%8A%E5%95%8F%E7%AD%94%E7%B6%B2%E7%AB%99%E4%B8%AD%E7%9A%84%E6%83%A1%E6%84%8F%E8%A8%80%E8%AB%96-b19e246da09c" target='_blank'>
                    自動篩選惡意言論，找出省錢關鍵！ 深度學習結論篇</a>
                    <p>我們講解了資料處理與模型設定的方法，在本篇中，我們將從營收的角度比較各個模型的成效...</p>
                </div>
                <div className="blog-blog" style={{borderTop: '#EF798A solid 4px'}} >
                    <a href="https://medium.com/marketingdatascience/%E9%80%8F%E9%81%8E%E4%BD%BF%E7%94%A8%E8%80%85%E7%BF%92%E6%85%A3%E5%88%86%E6%9E%90-%E9%A0%90%E6%B8%AC%E6%9C%AA%E4%BE%86%E9%9C%80%E6%B1%82%E9%87%8F-%E4%BB%A5%E5%85%B1%E4%BA%AB%E5%96%AE%E8%BB%8A%E7%94%A2%E6%A5%AD%E7%82%BA%E4%BE%8B-207727fe13e5" target='_blank'>
                    透過使用者習慣分析，預測未來需求量—以共享單車產業為例</a>
                    <p>假設你代表公司，到了一個陌生的城鎮和客戶開會，下了捷運才發現目的地還有十分鐘的路程...</p>
                </div>
                <div className="blog-blog" style={{borderTop: '#129490 solid 4px'}} >
                    <a href="https://dorothychau1316.medium.com/%E7%94%A8%E6%99%BA%E6%85%A7%E5%9E%8B%E6%89%8B%E6%A9%9F%E5%81%9A%E4%BA%BA%E9%A1%9E%E6%B4%BB%E5%8B%95%E5%81%B5%E6%B8%AC-7f8ff8661b18" target='_blank'>
                    用智慧型手機做人類活動偵測</a>
                    <p>實驗是在 30 位 19 到 48 歲的成年人身上進行的。每個都會在手腕上配戴智慧型手機 ...</p>
                </div>
                
            </div>
        </div>
    )
}