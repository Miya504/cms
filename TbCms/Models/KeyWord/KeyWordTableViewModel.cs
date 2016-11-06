using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TbCms.Models.KeyWord
{
    public class KeyWordTableViewModel
    {
        /// <summary>
        /// キーワードID.
        /// </summary>
        public int keyword_id { get; set; }

        /// <summary>
        /// タグ内容.
        /// </summary>
        public string tag_text { get; set; }

        /// <summary>
        /// 説明.
        /// </summary>
        public string discription { get; set; }

        /// <summary>
        /// 削除状態.
        /// </summary>
        public string delete_state { get; set; }
    }
}