using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TbCms.Models
{
    public class CategoryTableViewModel
    {
        /// <summary>
        /// カテゴリID.
        /// </summary>
        public string category_id { get; set; }

        /// <summary>
        /// カテゴリ名.
        /// </summary>
        public string category_name { get; set; }

        /// <summary>
        /// 親カテゴリ名.
        /// </summary>
        public string parent_category_name { get; set; }

        /// <summary>
        /// テーマカラー.
        /// </summary>
        public string theme_color { get; set; }

        /// <summary>
        /// 説明.
        /// </summary>
        public string description { get; set; }

        /// <summary>
        /// 公開種別.
        /// </summary>
        public string open_kind { get; set; }

        /// <summary>
        /// 公開開始日.
        /// </summary>
        public System.DateTime open_start { get; set; }

        /// <summary>
        /// 公開終了日.
        /// </summary>
        public System.DateTime open_end { get; set; }

        /// <summary>
        /// 削除状態.
        /// </summary>
        public string delete_state { get; set; }
    }
}