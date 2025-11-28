'use client';

import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import styles from './CVForm.module.css';

export default function Certificates() {
    const { register, control } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'certificates',
    });

    return (
        <div>
            {fields.map((field, index) => (
                <div key={field.id} className={styles.card}>
                    <button type="button" onClick={() => remove(index)} className={styles.removeBtn} title="Xóa">
                        &times;
                    </button>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Tên Bằng Cấp / Chứng Chỉ</label>
                        <input {...register(`certificates.${index}.name`)} className={styles.input} placeholder="Bằng tốt nghiệp ĐH, CĐ, chứng chỉ tiếng..." />
                    </div>

                    <div className={styles.grid2}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Thời Gian Đạt Được</label>
                            <input {...register(`certificates.${index}.date`)} className={styles.input} placeholder="Tháng/Năm" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Trình Độ / Xếp Loại</label>
                            <input {...register(`certificates.${index}.level`)} className={styles.input} />
                        </div>
                    </div>
                </div>
            ))}

            <button type="button" onClick={() => append({})} className={styles.addBtn}>
                + Thêm bằng cấp
            </button>
        </div>
    );
}
