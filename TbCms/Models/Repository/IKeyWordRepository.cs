﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TbCms.Models.Repository
{
    /// <summary>
    /// [マスタメンテ]キーワードマスタリポジトリ.
    /// </summary>
    public interface IKeyWordRepository
    {
        /// <summary>
        /// 初回取得(全件表示).
        /// </summary>
        /// <returns></returns>
        KeyWordListViewModel GetFirstListData();

        /// <summary>
        /// 検索結果取得.
        /// </summary>
        /// <returns></returns>
        KeyWordListViewModel GetSarchListData(KeyWordListViewModel reqModel);

        /// <summary>
        /// 新規登録情報取得.
        /// </summary>
        /// <returns></returns>
        KeyWordInputViewModel GetInputNewData();

        /// <summary>
        /// 新規登録.
        /// </summary>
        /// <returns></returns>
        bool RegistrationInputNewData(KeyWordInputViewModel reqModel);

        /// <summary>
        /// 編集情報取得.
        /// </summary>
        /// <returns></returns>
        KeyWordInputViewModel GetInputEditData(int id);

        /// <summary>
        /// 編集結果登録.
        /// </summary>
        /// <returns></returns>
        bool RegistrationInputEditData(KeyWordInputViewModel reqModel);
    }
}
