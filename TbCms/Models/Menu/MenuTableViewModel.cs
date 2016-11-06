using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TbCms.Models
{
    public class MenuTableViewModel
    {

        /// <summary>
        /// タイトル.
        /// </summary>
        public string menu_title { get; set; }

        /// <summary>
        /// コントローラー.
        /// </summary>
        public string menu_controller { get; set; }

        /// <summary>
        /// アクション.
        /// </summary>
        public string menu_action { get; set; }

        /// <summary>
        /// メニュー種類.
        /// </summary>
        public string menu_kind { get; set; }

    }
}