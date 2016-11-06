using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TbCms.Models
{
    public class CategoryListViewModel
    {
        /// <summary>
        /// カテゴリID.
        /// </summary>
        [Display(Name = "カテゴリID")]
        public string category_id { get; set; }

        /// <summary>
        /// カテゴリ名.
        /// </summary>
        [Display(Name = "カテゴリ名")]
        public string category_name { get; set; }

        /// <summary>
        /// [チェックボックス]公開種別：公開.
        /// </summary>
        [Display(Name = "公開")]
        public Boolean publicOpenKind { get; set; }

        /// <summary>
        /// [チェックボックス]公開種別：期間公開.
        /// </summary>
        [Display(Name = "期間公開")]
        public Boolean limitedOpenKind { get; set; }

        /// <summary>
        /// [チェックボックス]公開種別：非公開.
        /// </summary>
        [Display(Name = "非公開")]
        public Boolean privateOpenKind { get; set; }

        /// <summary>
        /// 公開開始日（開始）.
        /// </summary>
        [Display(Name = "公開開始日（開始）")]
        public String openStartDateStart { get; set; }

        /// <summary>
        /// 公開開始日（終了）.
        /// </summary>
        [Display(Name = "公開開始日（終了）")]
        public String openStartDateEnd { get; set; }

        /// <summary>
        /// 公開終了日（開始）.
        /// </summary>
        [Display(Name = "公開終了日（開始）")]
        public String openEndDateStart { get; set; }

        /// <summary>
        /// 公開終了日（終了）.
        /// </summary>
        [Display(Name = "公開終了日（終了）")]
        public String openEndDateEnd { get; set; }

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
        public CategoryTableViewModel[] TableList { get; set; }
    }
}