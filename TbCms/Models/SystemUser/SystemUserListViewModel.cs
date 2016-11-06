using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TbCms.Models
{
    public class SystemUserListViewModel
    {
        /// <summary>
        /// システムユーザー名.
        /// </summary>
        [Display(Name = "システムユーザー名")]
        public string system_user_name { get; set; }

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
        public SystemUserTableViewModel[] TableList { get; set; }
    }
}