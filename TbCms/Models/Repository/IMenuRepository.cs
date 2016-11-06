using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TbCms.Models.Repository
{
    /// <summary>
    /// メニューリポジトリ
    /// </summary>
    public interface IMenuRepository
    {

        /// <summary>
        /// メニューボタン取得
        /// </summary>
        /// <returns></returns>
        MenuViewModel GetListData(object isAdministrator, object isCreateNews, object isCreateContents);

    }
}
