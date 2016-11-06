using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TbCms.Models.KeyWord
{
    public class KeyWordListViewModel
    {
        /// <summary>
        /// キーワードID.
        /// </summary>
        [Display(Name = "キーワードID")]
        public String keyword_id { get; set; }

        /// <summary>
        /// タグ内容.
        /// </summary>
        [Display(Name = "タグ内容")]
        public String tag_text { get; set; }

        /// <summary>
        /// 説明.
        /// </summary>
        [Display(Name = "説明")]
        public String description { get; set; }

        /// <summary>
        /// [チェックボックス]削除状態：通常.
        /// </summary>
        [Display(Name = "通常")]
        public Boolean ChkNormal { get; set; }

        /// <summary>
        /// [チェックボックス]削除状態：仮削除.
        /// </summary>
        [Display(Name = "仮削除")]
        public Boolean ChkTempDel { get; set; }

        /// <summary>
        /// [チェックボックス]削除状態：削除.
        /// </summary>
        [Display(Name = "削除")]
        public Boolean ChkDelete { get; set; }

        /// <summary>
        /// 一覧.
        /// </summary>
        public KeyWordTableViewModel[] TableList { get; set; }
    }
}