using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TbCms.Models
{
    public class MenuViewModel
    {
        /// <summary>
        /// マスタメニュー表示可否
        /// </summary>
        public bool IsMaster { get; set; }

        /// <summary>
        ///記事メニュー表示可否
        /// </summary>
        public bool IsNews { get; set; }

        /// <summary>
        /// コンテンツメニュー表示可否
        /// </summary>
        public bool IsContaints { get; set; }

        /// <summary>
        /// マスタメニューリスト
        /// </summary>
        public MenuTableViewModel[] MasterMenuList { get; set; }

        /// <summary>
        /// 記事メニューリスト
        /// </summary>
        public MenuTableViewModel[] NewsMenuList { get; set; }

        /// <summary>
        /// コンテンツメニューリスト
        /// </summary>
        public MenuTableViewModel[] ContentsMenuList { get; set; }
    }
}