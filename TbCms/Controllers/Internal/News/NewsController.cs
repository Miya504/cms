using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TbCms.Controllers.Internal.News
{
    public class NewsController : Controller
    {
        /// <summary>
        /// 一覧表示.
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public ActionResult List()
        {
            return View();
        }

        /// <summary>
        /// 新規登録.
        /// </summary>
        /// <returns></returns>
        public ActionResult New()
        {

            var itemList = new List<string>();

            itemList.Add("中見出し");
            itemList.Add("小見出し");
            itemList.Add("本文テキスト");
            itemList.Add("イメージ");
            itemList.Add("リンク");
            itemList.Add("コンテンツ");
            itemList.Add("カテゴリ");
            itemList.Add("人気書式");
            itemList.Add("おすすめ記事");
            itemList.Add("タグ");

            ViewBag.ItemList = itemList;

            return View("Input");
        }

        /// <summary>
        /// 編集.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Edit()
        {
            return View("Input");
        }
    }
}